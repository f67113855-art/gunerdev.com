'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'Bir proje ne kadar sürede tamamlanır?',
    answer:
      'Kapsama göre değişir; küçük landing veya kurumsal siteler 1–3 hafta, orta ölçekli web uygulamaları 6–12 hafta, daha kapsamlı ürünler ise 3 ay ve üzeri sürebilir. İlk keşif görüşmesinin ardından net bir takvim sunarız.',
  },
  {
    question: 'Çalışma süreciniz nasıl ilerliyor?',
    answer:
      'Kısa bir keşif görüşmesiyle başlıyoruz; ardından kapsam, mimari ve takvim üzerinde anlaşıyoruz. İki haftalık döngülerde geliştiriyor, her sprint sonunda çalışan bir ürün teslim ediyoruz. Yayın sonrasında izleme ve iyileştirme aşaması başlıyor.',
  },
  {
    question: 'Hangi teknolojilerle çalışıyorsunuz?',
    answer:
      'Frontend tarafında Next.js, React ve TypeScript; backend tarafında Node.js, Python (FastAPI / Django) ve PostgreSQL ağırlıklı kullanıyoruz. Mimariyi projenin gerçek ihtiyacına göre seçiyoruz, modaya göre değil.',
  },
  {
    question: 'Yayın sonrası destek veriyor musunuz?',
    answer:
      'Evet. Tüm projeler için 30 günlük ücretsiz hata düzeltme garantisi sunuyoruz. Sonrasında aylık bakım, izleme ve geliştirme paketleriyle uzun vadeli teknik ortaklık kuruyoruz.',
  },
  {
    question: 'Sözleşme ve fiyatlandırma nasıl işliyor?',
    answer:
      'Net kapsamlı projelerde sabit fiyat, kapsamı zaman içinde şekillenen ürünlerde haftalık zaman & malzeme modeli kullanıyoruz. Gizlilik sözleşmesi (NDA) ve kaynak kod telif devri standart pratiğimizdir.',
  },
  {
    question: 'Mevcut bir projeyi devralabilir misiniz?',
    answer:
      'Devralabiliriz. Önce kısa bir kod denetimi yapıp teknik borç ve riskleri raporluyoruz. Ardından doğrudan geliştirmeye devam ediyor ya da gerekli refactor sonrası ilerlemeyi öneriyoruz.',
  },
];

function ChevronIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function FAQRow({
  item,
  index,
  open,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const id = `faq-${index}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.04 }}
      className="border-b border-border"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-button`}
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:bg-surface/40"
      >
        <span className="flex items-baseline gap-4">
          <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground/60">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-base font-medium tracking-tight text-foreground sm:text-lg">
            {item.question}
          </span>
        </span>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent"
        >
          <ChevronIcon />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-10 pr-4 text-sm leading-relaxed text-muted-foreground sm:pr-12 sm:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Sıkça Sorulan Sorular"
          title="Aklınızda kalan sorulara, açık ve net cevaplar."
          description="En sık aldığımız soruları derledik. Cevabını bulamadığınız bir konu varsa doğrudan iletişime geçmekten çekinmeyin."
          align="center"
        />

        <div className="mx-auto mt-14 max-w-3xl border-t border-border">
          {faqs.map((item, index) => (
            <FAQRow
              key={item.question}
              item={item}
              index={index}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
