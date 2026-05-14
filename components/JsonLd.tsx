import { stringifyJsonLd } from '@/lib/schema';

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JsonLdValue }
  | JsonLdValue[];

type JsonLdData = { [key: string]: JsonLdValue };

export function JsonLd({ data }: { data: JsonLdData | JsonLdData[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifyJsonLd(data) }}
    />
  );
}
