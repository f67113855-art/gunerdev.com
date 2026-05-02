'use client';

import { useState, type FormEvent } from 'react';
import { BUDGET_OPTIONS, type ContactPayload, type ValidationError } from '@/lib/validation';
import { cn } from '@/lib/utils';

type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

type SubmitState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string };

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<SubmitState>({ status: 'idle' });

  function clearFieldError(field: keyof ContactPayload) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setState({ status: 'submitting' });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      company: String(formData.get('company') ?? ''),
      budget: String(formData.get('budget') ?? ''),
      message: String(formData.get('message') ?? ''),
      website: String(formData.get('website') ?? ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (response.status === 422 && Array.isArray(data?.errors)) {
        const fieldErrors: FieldErrors = {};
        for (const err of data.errors as ValidationError[]) {
          fieldErrors[err.field] = err.message;
        }
        setErrors(fieldErrors);
        setState({
          status: 'error',
          message: 'Lütfen formdaki alanları kontrol ediniz.',
        });
        return;
      }

      if (!response.ok) {
        setState({
          status: 'error',
          message:
            data?.error ??
            'Mesajınız gönderilirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.',
        });
        return;
      }

      setState({
        status: 'success',
        message:
          data?.message ??
          'Mesajınız başarıyla iletildi. 24 saat içinde size dönüş yapacağız.',
      });
      event.currentTarget.reset();
    } catch {
      setState({
        status: 'error',
        message:
          'Bağlantı hatası. İnternet bağlantınızı kontrol edip tekrar deneyiniz.',
      });
    }
  }

  const submitting = state.status === 'submitting';

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-surface p-8 md:p-10"
      aria-label="İletişim formu"
    >
      <div className="hidden">
        <label htmlFor="website">
          Website (boş bırakın)
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Adınız Soyadınız"
          name="name"
          type="text"
          autoComplete="name"
          required
          error={errors.name}
          onInput={() => clearFieldError('name')}
        />
        <Field
          label="E-posta"
          name="email"
          type="email"
          autoComplete="email"
          required
          error={errors.email}
          onInput={() => clearFieldError('email')}
        />
        <Field
          label="Şirket"
          name="company"
          type="text"
          autoComplete="organization"
          error={errors.company}
          onInput={() => clearFieldError('company')}
          optional
        />
        <SelectField
          label="Tahmini Bütçe"
          name="budget"
          options={BUDGET_OPTIONS as readonly string[]}
          error={errors.budget}
          onChange={() => clearFieldError('budget')}
          optional
        />
      </div>

      <div className="mt-5">
        <TextAreaField
          label="Projeniz hakkında"
          name="message"
          placeholder="Hedeflerinizi, mevcut durumu ve beklediğiniz sonucu kısaca paylaşın."
          rows={6}
          required
          error={errors.message}
          onInput={() => clearFieldError('message')}
        />
      </div>

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Form gönderildiğinde kişisel verileriniz yalnızca size dönüş yapmak amacıyla işlenir.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full sm:w-auto"
          aria-busy={submitting}
        >
          {submitting ? 'Gönderiliyor…' : 'Mesajı Gönder'}
          {!submitting && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          )}
        </button>
      </div>

      {state.status === 'success' && (
        <div
          role="status"
          className="mt-6 rounded-xl border border-success/30 bg-success/10 p-4 text-sm text-success"
        >
          {state.message}
        </div>
      )}
      {state.status === 'error' && (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-danger/30 bg-danger/10 p-4 text-sm text-danger"
        >
          {state.message}
        </div>
      )}
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof ContactPayload;
  type: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  onInput?: () => void;
};

function Field({ label, name, type, autoComplete, required, optional, error, onInput }: FieldProps) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center justify-between text-xs font-medium text-foreground">
        <span>
          {label}
          {required && <span className="ml-1 text-accent">*</span>}
        </span>
        {optional && (
          <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            opsiyonel
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        onInput={onInput}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0',
          error
            ? 'border-danger/60 focus:border-danger focus:ring-danger/40'
            : 'border-border focus:border-accent/60',
        )}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: keyof ContactPayload;
  options: readonly string[];
  required?: boolean;
  optional?: boolean;
  error?: string;
  onChange?: () => void;
};

function SelectField({ label, name, options, required, optional, error, onChange }: SelectFieldProps) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center justify-between text-xs font-medium text-foreground">
        <span>
          {label}
          {required && <span className="ml-1 text-accent">*</span>}
        </span>
        {optional && (
          <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            opsiyonel
          </span>
        )}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        onChange={onChange}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0',
          error
            ? 'border-danger/60 focus:border-danger focus:ring-danger/40'
            : 'border-border focus:border-accent/60',
        )}
      >
        <option value="" disabled>
          Seçiniz
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

type TextAreaFieldProps = {
  label: string;
  name: keyof ContactPayload;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: string;
  onInput?: () => void;
};

function TextAreaField({ label, name, placeholder, rows = 5, required, error, onInput }: TextAreaFieldProps) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-foreground">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        required={required}
        onInput={onInput}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'w-full resize-y rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0',
          error
            ? 'border-danger/60 focus:border-danger focus:ring-danger/40'
            : 'border-border focus:border-accent/60',
        )}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
