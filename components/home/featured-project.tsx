import Link from "next/link";

import { Container } from "@/components/ui/container";

export type FeaturedProjectData = {
  slug: string;
  category: string;
  title: string;
  href: string;
  summary?: string;
  imageAlt?: string;
};

type FeaturedProjectProps = {
  project: FeaturedProjectData;
  index?: number;
};

type ProjectMetaProps = {
  project: FeaturedProjectData;
  className?: string;
};

function ProjectMeta({ project, className }: ProjectMetaProps) {
  return (
    <div
      className={["flex h-full flex-col lg:min-h-[19rem]", className]
        .filter(Boolean)
        .join(" ")}
      data-featured-project-meta
    >
      <div className="lg:pt-2">
        <p className="type-label whitespace-nowrap text-accent">
          {project.category}
        </p>
        <h3
          id={`featured-project-${project.slug}`}
          className="mt-3 font-display text-[clamp(1.9rem,2.4vw,2.7rem)] leading-[0.96] tracking-[-0.04em] text-text-primary"
        >
          {project.title.split("\n").map((line, lineIndex) => (
            <span key={`${lineIndex}-${line}`} className="block">
              {line}
            </span>
          ))}
        </h3>
      </div>

      {project.summary ? (
        <p className="type-body mt-6 max-w-[13rem] text-text-secondary">
          {project.summary}
        </p>
      ) : null}

      <div className="mt-6 lg:mt-auto">
        <Link
          href={project.href}
          className="type-button group relative inline-flex items-center gap-2 pb-1 text-text-primary transition-[color,filter] duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-accent-hover hover:brightness-110"
          data-featured-project-link
        >
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-full bg-[rgba(124,138,154,0.35)]"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-px w-0 bg-[rgba(152,167,184,0.92)] transition-[width] duration-[560ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
          />
          View Study
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 text-accent"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12L12 4M6 4H12V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export function FeaturedProject({
  project,
  index = 0,
}: FeaturedProjectProps) {
  const isMirrored = index % 2 === 1;
  const sanitizedTitle = project.title.replace(/\s+/g, " ").trim();

  return (
    <section
      data-featured-project
      aria-labelledby={`featured-project-${project.slug}`}
      className="relative overflow-clip pb-16 pt-4 sm:pb-20 lg:pb-[5.5rem] lg:pt-4"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div
          className={[
            "grid gap-6 lg:items-start lg:gap-6",
            isMirrored
              ? "lg:grid-cols-[10.5rem_minmax(0,1fr)]"
              : "lg:grid-cols-[minmax(0,1fr)_10.5rem]",
          ].join(" ")}
        >
          {isMirrored ? (
            <ProjectMeta project={project} className="order-2 lg:order-1" />
          ) : null}

          <Link
            href={project.href}
            className={[
              "group block overflow-hidden rounded-[4px] transition-transform duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1",
              isMirrored ? "order-1 lg:order-2" : "",
            ].join(" ")}
            aria-label={`${sanitizedTitle} project`}
            data-featured-project-card
          >
            <div className="relative aspect-[1.72/1] overflow-hidden rounded-[4px] border border-[rgba(68,71,76,0.28)] bg-[#d7d4ce]">
              <div
                className="absolute inset-0 scale-[1.015] bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.72)_0%,rgba(231,228,222,0.88)_32%,rgba(187,184,179,0.94)_72%,rgba(161,158,154,1)_100%)] transition-transform duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                data-featured-project-image
              />
              <div className="absolute inset-0 opacity-[0.16] mix-blend-multiply bg-[radial-gradient(rgba(120,116,110,0.32)_0.8px,transparent_0.8px)] [background-size:10px_10px]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0)_18%,rgba(0,0,0,0.05)_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-[10px] border border-black/10 text-[3.2rem] text-black/16">
                  <span aria-hidden="true">⊞</span>
                </div>
              </div>
            </div>
          </Link>

          {!isMirrored ? (
            <ProjectMeta project={project} />
          ) : null}
        </div>
      </Container>
    </section>
  );
}
