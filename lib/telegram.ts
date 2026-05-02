export type TelegramContactPayload = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function sendTelegramContactNotification(
  payload: TelegramContactPayload,
): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        '[telegram] TELEGRAM_BOT_TOKEN veya TELEGRAM_CHAT_ID tanimli degil; bildirim atlandi.',
      );
    }
    return;
  }

  const lines: string[] = [
    '🆕 <b>Yeni iletişim formu başvurusu</b>',
    '',
    `👤 <b>${escapeHtml(payload.name)}</b>`,
    `📧 ${escapeHtml(payload.email)}`,
  ];

  if (payload.company) lines.push(`🏢 ${escapeHtml(payload.company)}`);
  if (payload.budget) lines.push(`💰 ${escapeHtml(payload.budget)}`);

  lines.push('', '<b>Mesaj:</b>', escapeHtml(payload.message));

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: lines.join('\n'),
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
        signal: AbortSignal.timeout(8000),
      },
    );

    if (!response.ok) {
      const body = await response.text().catch(() => '');
      console.error(
        '[telegram] sendMessage basarisiz:',
        response.status,
        body,
      );
    }
  } catch (err) {
    console.error('[telegram] sendMessage hata:', err);
  }
}
