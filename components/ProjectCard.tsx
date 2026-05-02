'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  problem: string;
  solution: string;
  techStack: string[];
  outcome: string;
  outcomeMetrics?: { label: string; value: string }[];
};

type ProjectCardProps = {
  project: Project;
  index?: number;
  className?: string;
};

export function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
      className={cn(
        'group relative flex flex-col gap-6 rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-muted-foreground/30 md:p-8',
        className,
      )}
    >
      <header className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        <span className="rounded-full border border-border bg-background px-3 py-1">
          {project.category}
        </span>
        <span>{project.year}</span>
        <span aria-hidden="true">·</span>
        <span className="text-foreground">{project.client}</span>
      </header>

      <h3 className="text-xl font-semibold tracking-tight md:text-2xl text-balance">
        {project.title}
      </h3>

      <dl className="space-y-5 text-sm leading-relaxed">
        <div>
          <dt className="text-xs font-medium uppercase tracking-[0.16em] text-accent/80">
            Problem
          </dt>
          <dd className="mt-1.5 text-muted-foreground">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-[0.16em] text-accent/80">
            Çözüm
          </dt>
          <dd className="mt-1.5 text-muted-foreground">{project.solution}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-[0.16em] text-accent/80">
            Sonuç
          </dt>
          <dd className="mt-1.5 text-foreground">{project.outcome}</dd>
        </div>
      </dl>

      {project.outcomeMetrics && project.outcomeMetrics.length > 0 && (
        <div className="grid grid-cols-3 gap-3 rounded-xl border border-border bg-background/60 p-4">
          {project.outcomeMetrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="font-display text-lg font-semibold tracking-tight text-foreground">
                {metric.value}
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <footer className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground"
          >
            {tech}
          </span>
        ))}
      </footer>
    </motion.article>
  );
}
