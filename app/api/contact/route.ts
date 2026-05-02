import { NextResponse, type NextRequest } from 'next/server';
import { validateContact } from '@/lib/validation';
import { rateLimit } from '@/lib/rate-limit';
import { sendTelegramContactNotification } from '@/lib/telegram';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() ?? 'unknown';
  return request.headers.get('x-real-ip') ?? 'unknown';
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.toLowerCase().includes('application/json')) {
    return NextResponse.json(
      { ok: false, error: 'Beklenmeyen istek formatı.' },
      { status: 415 },
    );
  }

  const ip = getClientIp(request);
  const limit = rateLimit(`contact:${ip}`);
  if (!limit.allowed) {
    const retryAfter = Math.max(1, Math.ceil((limit.resetAt - Date.now()) / 1000));
    return NextResponse.json(
      { ok: false, error: 'Çok fazla istek gönderildi. Lütfen biraz sonra tekrar deneyin.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(retryAfter),
          'X-RateLimit-Remaining': '0',
        },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Geçersiz JSON.' },
      { status: 400 },
    );
  }

  if (
    body &&
    typeof body === 'object' &&
    'website' in body &&
    typeof (body as Record<string, unknown>).website === 'string' &&
    ((body as Record<string, unknown>).website as string).length > 0
  ) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const result = validateContact(body);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, errors: result.errors },
      { status: 422 },
    );
  }

  if (process.env.NODE_ENV !== 'production') {
    console.info('[contact] Yeni başvuru alındı', {
      name: result.data.name,
      email: result.data.email,
      company: result.data.company,
    });
  }

  await sendTelegramContactNotification(result.data);

  return NextResponse.json(
    {
      ok: true,
      message: 'Mesajınız başarıyla iletildi. 24 saat içinde size dönüş yapacağız.',
    },
    {
      status: 200,
      headers: {
        'X-RateLimit-Remaining': String(limit.remaining),
      },
    },
  );
}

export function GET(): NextResponse {
  return NextResponse.json(
    { ok: false, error: 'Yöntem desteklenmiyor.' },
    { status: 405, headers: { Allow: 'POST' } },
  );
}
