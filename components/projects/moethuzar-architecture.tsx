import { Container } from "@/components/ui/container";

type MoethuzarArchitectureLayer = {
  title: string;
  location: string;
  purpose: string;
};

type MoethuzarArchitectureProps = {
  label: string;
  title: string;
  body: string;
  principles: string[];
  layers: MoethuzarArchitectureLayer[];
};

function DiagramCard({
  eyebrow,
  location,
  purpose,
  className,
}: {
  eyebrow: string;
  location: string;
  purpose: string;
  className?: string;
}) {
  return (
    <div
      className={`border border-[#20242B] bg-[rgba(255,255,255,0.012)] px-5 py-5 ${className ?? ""}`}
    >
      <p className="mb-4 text-[0.625rem] uppercase leading-[1.2] tracking-[0.1em] text-[#7C8A9A]">
        {eyebrow}
      </p>
      <p className="font-display text-[1.75rem] italic leading-[0.95] tracking-[-0.04em] text-[#F3F0EA]">
        {location}
      </p>
      <p className="mt-3 max-w-[22rem] text-[0.92rem] leading-[1.55] tracking-[-0.01em] text-[#7C8A9A]">
        {purpose}
      </p>
    </div>
  );
}

export function MoethuzarArchitecture({
  label,
  title,
  body,
  principles,
  layers,
}: MoethuzarArchitectureProps) {
  const [summary, detailParagraph, closingParagraph] = body.split("\n\n");
  const transport = layers[0];
  const services = layers[1];
  const domain = layers[2];
  const persistence = layers[3];
  const philosophy = principles.find((principle) =>
    principle.toLowerCase().includes("canonical truth"),
  );

  return (
    <section
      data-moethuzar-architecture
      aria-labelledby="moethuzar-architecture-title"
      className="relative bg-[#0E0F11] pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-[12rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
          <div className="lg:col-span-8" data-moethuzar-architecture-phase="phase1">
            <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
              {label}
            </p>

            <h2
              id="moethuzar-architecture-title"
              className="mt-8 max-w-[32rem] font-display text-[clamp(3rem,6vw,4rem)] italic leading-[1.05] tracking-[-0.05em] text-[#F3F0EA]"
            >
              {title}
            </h2>
          </div>

          <div
            className="lg:col-span-5 lg:pt-[4rem]"
            data-moethuzar-architecture-phase="phase2"
          >
            <p className="max-w-[31rem] text-[0.76rem] uppercase leading-[1.45] tracking-[0.1em] text-[#7C8A9A]">
              {summary}
            </p>

            <div className="mt-8 max-w-[28rem] space-y-8 text-[1.125rem] leading-[1.6] tracking-[-0.02em] text-[#CFC8BE]">
              <p>{detailParagraph}</p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-[6rem]">
            <div
              className="rounded-[0.125rem] border border-[#20242B] bg-[rgba(255,255,255,0.008)] px-5 py-6 sm:px-7 sm:py-7 lg:px-9 lg:py-9"
              data-moethuzar-architecture-plane
            >
              <div
                className="grid grid-cols-1 gap-5"
                data-moethuzar-architecture-layer="transport"
              >
                <DiagramCard
                  eyebrow="Thin transport layer"
                  location={transport.location}
                  purpose={transport.purpose}
                />
              </div>

              <div className="ml-1 mt-3 h-7 w-px bg-[#20242B] sm:h-8 lg:ml-[14rem] lg:h-9" />

              <div data-moethuzar-architecture-layer="services">
                <DiagramCard
                  eyebrow="Rich use case services"
                  location={services.location}
                  purpose={services.purpose}
                />

                <div className="mt-5 grid gap-6 border-t border-[#20242B] pt-5 sm:grid-cols-2">
                  <div>
                    <p className="text-[0.625rem] uppercase leading-[1.2] tracking-[0.1em] text-[#F3F0EA]">
                      Requirements driven
                    </p>
                    <p className="mt-2 text-[0.78rem] leading-[1.45] tracking-[-0.01em] text-[#7C8A9A]">
                      Architecture follows actual domain complexity.
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] uppercase leading-[1.2] tracking-[0.1em] text-[#F3F0EA]">
                      Operational realism
                    </p>
                    <p className="mt-2 text-[0.78rem] leading-[1.45] tracking-[-0.01em] text-[#7C8A9A]">
                      Idempotency and recovery as first-class citizens.
                    </p>
                  </div>
                </div>
              </div>

              <div className="ml-1 mt-3 h-7 w-px bg-[#20242B] sm:h-8 lg:ml-[13rem] lg:h-9" />

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <div data-moethuzar-architecture-layer="domain">
                  <DiagramCard
                    eyebrow="Domain rules"
                    location={domain.location}
                    purpose={domain.purpose}
                    className="h-full"
                  />
                </div>

                <div data-moethuzar-architecture-layer="persistence">
                  <DiagramCard
                    eyebrow="Persistence"
                    location={persistence.location}
                    purpose={persistence.purpose}
                    className="h-full"
                  />
                </div>
              </div>

              <div
                className="mt-9 flex flex-col gap-3 border-t border-[#20242B] pt-6 text-[0.7rem] uppercase leading-[1.2] tracking-[0.1em] text-[#F3F0EA] sm:flex-row sm:items-center sm:justify-between"
                data-moethuzar-architecture-layer="footer"
              >
                <p>Moethuzar v1.0 / Architecture schematic</p>
                <p>PostgreSQL - Prisma</p>
              </div>
            </div>
          </div>

          <aside
            className="border-l border-[#20242B] pl-6 lg:col-start-10 lg:col-end-13 lg:self-start lg:pt-[10rem]"
            data-moethuzar-architecture-phase="phase4"
          >
            <p className="text-[0.625rem] uppercase leading-[1.2] tracking-[0.1em] text-[#7C8A9A]">
              Philosophy
            </p>
            <blockquote className="mt-6 max-w-[14rem] font-display text-[clamp(2rem,3.4vw,3rem)] italic leading-[0.95] tracking-[-0.04em] text-[#F3F0EA]">
              &ldquo;
              {philosophy ?? "Canonical truth first for important business domains."}
              &rdquo;
            </blockquote>

            <div className="mt-10">
              <p className="text-[0.625rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
                Boundary
              </p>
              <p className="mt-3 max-w-[14rem] text-[1rem] leading-[1.6] tracking-[-0.015em] text-[#7C8A9A]">
                {closingParagraph}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
