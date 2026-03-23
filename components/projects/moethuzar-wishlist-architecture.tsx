import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

type LogicPoint = {
  title: string;
  body: string;
};

type MoethuzarWishlistArchitectureProps = {
  label: string;
  title: string;
  body: string;
  logicPoints: LogicPoint[];
};

function AnnotationItem({ title, body }: LogicPoint) {
  return (
    <div
      className="flex gap-4"
      data-moethuzar-wishlist-phase="phase4"
    >
      <span className="mt-[0.45rem] h-2 w-2 rounded-full border border-[#7C8A9A]" />
      <div>
        <h3 className="font-sans text-[1rem] font-medium leading-[1.45] tracking-[-0.015em] text-[#F3F0EA]">
          {title}:
          <span className="font-normal text-[#7C8A9A]"> {body}</span>
        </h3>
      </div>
    </div>
  );
}

function WriteModelIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#7C8A9A]" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M7 4.5h7l3 3V19.5H7z" />
      <path d="M14 4.5v3h3" />
    </svg>
  );
}

function OutboxIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#7C8A9A]" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="5" y="7" width="9" height="9" />
      <rect x="10" y="4" width="9" height="9" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#7C8A9A]" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M14.5 5.5c2.7 0 4.5 1.8 4.5 4.5-3.7.1-6.8 3.2-7 7-2.7 0-4.5-1.8-4.5-4.5 0-4.1 3.3-7 7-7z" />
      <path d="M8.5 15.5l-2 3" />
      <path d="M12.5 11.5l.01 0" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#7C8A9A]" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3.5 12s3-5 8.5-5 8.5 5 8.5 5-3 5-8.5 5-8.5-5-8.5-5z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function DiagramNode({
  label,
  icon,
  active = false,
}: {
  label: string;
  icon: ReactNode;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3" data-moethuzar-wishlist-diagram-stage>
      <div
        className={`flex h-[3.75rem] w-[3.75rem] items-center justify-center border ${
          active
            ? "border-[#7C8A9A] bg-[rgba(124,138,154,0.05)]"
            : "border-[#20242B] bg-[rgba(255,255,255,0.015)]"
        }`}
      >
        {icon}
      </div>
      <p className="text-[0.58rem] uppercase leading-[1.2] tracking-[0.1em] text-[#F3F0EA]">
        {label}
      </p>
    </div>
  );
}

export function MoethuzarWishlistArchitecture({
  label,
  title,
  body,
  logicPoints,
}: MoethuzarWishlistArchitectureProps) {
  const [summary] = body.split("\n\n");
  const titleLines = title.split(" ");

  return (
    <section
      data-moethuzar-wishlist-architecture
      aria-labelledby="moethuzar-wishlist-architecture-title"
      className="relative bg-[#0E0F11] pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-[12rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          <div className="lg:col-start-1 lg:col-end-5" data-moethuzar-wishlist-phase="phase1">
            <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
              {label}
            </p>
            <h2
              id="moethuzar-wishlist-architecture-title"
              className="mt-7 max-w-[19rem] font-display text-[clamp(3.2rem,7vw,4.8rem)] leading-[0.84] tracking-[-0.06em] text-[#F3F0EA] lg:max-w-[21rem]"
            >
              {titleLines.map((line, index) => (
                <span key={`${index}-${line}`} className="block italic">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <div
            className="lg:col-start-1 lg:col-end-5 lg:pt-[3.25rem]"
            data-moethuzar-wishlist-phase="phase2"
          >
            <div className="max-w-[21rem] text-[1.125rem] leading-[1.6] tracking-[-0.02em] text-[#7C8A9A]">
              <p>{summary}</p>
            </div>

            <div className="mt-8 border-t border-[#20242B] pt-8 lg:mt-10">
              <div className="space-y-6">
                {logicPoints.map((point, index) => (
                  <AnnotationItem key={`${index}-${point.title}`} title={point.title} body={point.body} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-start-6 lg:col-end-13 lg:row-span-3 lg:border-l lg:border-[#20242B] lg:pl-12 lg:pt-[5.5rem]">
            <div
              className="border border-[#20242B] bg-[#14161A] p-5 sm:p-6 lg:max-w-[26.5rem] lg:p-8"
              data-moethuzar-wishlist-phase="phase3"
            >
              <div className="flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.1em] text-[#74706A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7C8A9A]" />
                <span>Architecture specification v2.4</span>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-[1fr_26px_1fr_26px_1fr] md:items-center">
                <DiagramNode label="Write model" icon={<WriteModelIcon />} />
                <div className="hidden items-center justify-center md:flex" data-moethuzar-wishlist-diagram-stage>
                  <span className="h-px w-full bg-[#20242B]" />
                </div>
                <DiagramNode label="Outbox" icon={<OutboxIcon />} active />
                <div className="hidden items-center justify-center md:flex" data-moethuzar-wishlist-diagram-stage>
                  <span className="h-px w-full bg-[#20242B]" />
                </div>
                <DiagramNode label="QStash" icon={<RocketIcon />} />
              </div>

              <div className="mt-8 flex justify-center" data-moethuzar-wishlist-diagram-stage>
                <div className="h-8 w-px bg-[#20242B]" />
              </div>

              <div className="flex justify-center">
                <DiagramNode label="Read model" icon={<EyeIcon />} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
