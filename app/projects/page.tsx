import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { getAllProjects } from '@/lib/projects';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Projeler',
  description:
    'Müşterilerimiz için geliştirdiğimiz web uygulamaları, özel yazılım çözümleri ve backend sistemleri.',
  path: '/projects',
});

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHero
        eyebrow="Projeler"
        title="Müşterilerimiz için ürettiğimiz iş sonuçları."
        description="Her projeyi bir vaka çalışması olarak ele alıyoruz: çözmeye çalıştığımız problem, uyguladığımız çözüm ve teslim ettiğimiz ölçülebilir sonuç."
        imageSrc="/hero-projects.jpg"
        imageAlt=""
        imagePosition="center 30%"
      />

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                href={`/projects/${project.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface/30 border-y border-border">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Çalışma Modelimiz"
            title="Her projeye aynı sorularla başlıyoruz."
            description="Doğru çözüm, doğru soruları sormakla başlar. Bu nedenle keşif sürecinde ücret almıyoruz; netlik ortaya çıkmadan iş başlamaz."
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              { label: 'Hedef', text: 'Bu proje hangi iş sonucuna hizmet ediyor?' },
              { label: 'Kısıt', text: 'Süre, bütçe ve teknik kısıtlar neler?' },
              { label: 'Başarı', text: 'Başarıyı hangi metriklerle ölçeceğiz?' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <span className="eyebrow justify-center">{item.label}</span>
                <p className="mt-3 text-base font-medium text-foreground text-balance">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Sıradaki vaka çalışması sizinki olabilir."
        description="Mevcut sisteminizi büyütelim, yeni bir ürün inşa edelim ya da sadece teknik bir görüş paylaşalım."
      />
    </>
  );
}
