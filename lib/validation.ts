export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
};

export type ValidationError = {
  field: keyof ContactPayload;
  message: string;
};

export type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; errors: ValidationError[] };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  company: { max: 120 },
  budget: { max: 60 },
  message: { min: 20, max: 2000 },
};

export const BUDGET_OPTIONS = [
  'Henüz belirsiz',
  '50.000 TL altı',
  '50.000 – 150.000 TL',
  '150.000 – 500.000 TL',
  '500.000 TL üzeri',
] as const;

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export function validateContact(input: unknown): ValidationResult {
  const errors: ValidationError[] = [];

  if (!input || typeof input !== 'object') {
    return {
      ok: false,
      errors: [{ field: 'message', message: 'Geçersiz istek gövdesi.' }],
    };
  }

  const raw = input as Record<string, unknown>;

  const name = asString(raw.name);
  const email = asString(raw.email).toLowerCase();
  const company = asString(raw.company);
  const budget = asString(raw.budget);
  const message = asString(raw.message);

  if (name.length < LIMITS.name.min) {
    errors.push({ field: 'name', message: 'Ad en az 2 karakter olmalıdır.' });
  } else if (name.length > LIMITS.name.max) {
    errors.push({ field: 'name', message: 'Ad çok uzun.' });
  }

  if (!email) {
    errors.push({ field: 'email', message: 'E-posta adresi zorunludur.' });
  } else if (!EMAIL_REGEX.test(email) || email.length > LIMITS.email.max) {
    errors.push({ field: 'email', message: 'Geçerli bir e-posta adresi giriniz.' });
  }

  if (company.length > LIMITS.company.max) {
    errors.push({ field: 'company', message: 'Şirket adı çok uzun.' });
  }

  if (budget.length > LIMITS.budget.max) {
    errors.push({ field: 'budget', message: 'Geçersiz bütçe seçimi.' });
  }

  if (message.length < LIMITS.message.min) {
    errors.push({ field: 'message', message: 'Mesaj en az 20 karakter olmalıdır.' });
  } else if (message.length > LIMITS.message.max) {
    errors.push({ field: 'message', message: 'Mesaj 2000 karakteri aşamaz.' });
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      company: company || undefined,
      budget: budget || undefined,
      message,
    },
  };
}
