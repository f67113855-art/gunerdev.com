import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllPosts, getPostBySlug, getRelatedLandingSlugs } from '@/lib/blog';
import { getLandingPage } from '@/lib/landing';
import { businessInfo } from '@/lib/site';
import { buildMetadata } from '@/lib/seo';
import { blogPostingJsonLd, breadcrumbJsonLd } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return buildMetadata({ title: 'Yazı bulunamadı', path: `/blog/${slug}` });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderContent(content: string) {
  return content.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2
          key={i}
          className="mt-10 text-2xl font-semibold tracking-tight text-foreground"
        >
          {block.slice(3)}
        </h2>
      );
    }
    return (
      <p
        key={i}
        className="text-base leading-[1.8] text-muted-foreground md:text-lg"
      >
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const relatedLandings = getRelatedLandingSlugs(post, 3)
    .map((s) => getLandingPage(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <article>
      <JsonLd
        data={[
          blogPostingJsonLd(post),
          breadcrumbJsonLd([
            { name: 'Anasayfa', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src={post.cover}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_50%,transparent_0%,hsl(var(--background)/0.45)_70%)]" />
        </div>

        <div className="container relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Blog
            </Link>
            <span className="mt-6 inline-flex rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
              {post.category}
            </span>
            <h1
              className="mt-5 text-display-lg font-semibold tracking-tight text-balance gradient-text"
              style={{ textShadow: '0 2px 24px hsl(var(--background) / 0.6)' }}
            >
              {post.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {post.excerpt}
            </p>
            <div className="mt-7 flex items-center justify-center gap-3 text-xs text-muted-foreground">
              <span>{businessInfo.founder}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} dk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="relative -mt-8 md:-mt-12">
        <div className="container">
          <div className="relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl border border-border shadow-soft">
            <Image
              src={post.cover}
              alt={post.coverAlt}
              fill
              sizes="(min-width: 1280px) 1024px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-5">
            {renderContent(post.content)}

            <div className="hairline mt-12" aria-hidden="true" />

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface px-3 py-1 text-xs text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="text-sm font-medium text-accent hover:underline"
              >
                Bu konu sizi de ilgilendiriyor mu? →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related landings */}
      {relatedLandings.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <p className="eyebrow">Konuyla ilgili hizmetler</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Bu yazıya konu olan çözümlerimiz
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Yazıda bahsedilen konularda Kayseri ve çevresine sunduğumuz hazır
                paketler:
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {relatedLandings.map((page) => (
                  <Link
                    key={page.slug}
                    href={`/${page.slug}`}
                    className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-accent/40"
                  >
                    <span className="text-sm font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {page.hero.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 text-accent transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other posts */}
      {otherPosts.length > 0 && (
        <section className="section bg-surface/30 border-t border-border">
          <div className="container">
            <h2 className="text-2xl font-semibold tracking-tight">Diğer yazılar</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={other.cover}
                      alt={other.coverAlt}
                      fill
                      sizes="(min-width: 1024px) 380px, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {other.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {other.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
