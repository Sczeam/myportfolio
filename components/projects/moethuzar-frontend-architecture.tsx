import { Container } from "@/components/ui/container";

type MoethuzarFrontendArchitectureProps = {
  label: string;
  title: string;
  body: string;
  principles: string[];
};

function FolderIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#7C8A9A]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M3.5 7.5h6l1.5 2h9.5v9H3.5z" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#7C8A9A]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <rect x="4.5" y="5.5" width="15" height="13" rx="1.2" />
      <path d="M4.5 10.5h15" />
    </svg>
  );
}

function SystemMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#7C8A9A]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M6 6h4v4H6zM14 14h4v4h-4zM14 6h4v4h-4zM6 14h4v4H6z" />
      <path d="M10 8h4M8 10v4M16 10v4M10 16h4" />
    </svg>
  );
}

function SchematicPanel({
  label,
  title,
  detail,
  align = "left",
}: {
  label: string;
  title: string;
  detail: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`border border-[#20242B] bg-[rgba(255,255,255,0.012)] px-4 py-4 ${
        align === "right" ? "md:ml-auto md:max-w-[13rem]" : "md:max-w-[13rem]"
      }`}
      data-moethuzar-frontend-architecture-visual-item
    >
      <p className="text-[0.5rem] uppercase leading-[1.2] tracking-[0.1em] text-[#7C8A9A]">
        {label}
      </p>
      <p className="mt-3 text-[0.72rem] uppercase leading-[1.25] tracking-[0.08em] text-[#F3F0EA]">
        {title}
      </p>
      <p className="mt-2 text-[0.6rem] leading-[1.45] tracking-[-0.01em] text-[#7C8A9A]">
        {detail}
      </p>
    </div>
  );
}

export function MoethuzarFrontendArchitecture({
  label,
  title,
  body,
  principles,
}: MoethuzarFrontendArchitectureProps) {
  const [summary, detail] = body.split("\n\n");

  return (
    <section
      data-moethuzar-frontend-architecture
      aria-labelledby="moethuzar-frontend-architecture-title"
      className="relative bg-[#0E0F11] pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-[12rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          <div className="order-2 lg:order-1 lg:col-start-1 lg:col-end-8 lg:pt-1">
            <div
              className="border border-[#20242B] bg-[#14161A] px-5 py-6 sm:px-7 sm:py-7 lg:px-6 lg:py-7"
              data-moethuzar-frontend-architecture-phase="phase3"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.58rem] uppercase leading-[1.2] tracking-[0.1em] text-[#7C8A9A]">
                    Feature-first architecture v.02
                  </p>
                  <p className="mt-2 text-[0.58rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
                    Stack Next.js App Router
                  </p>
                </div>
                <p className="text-[0.5rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
                  Client / server boundary
                </p>
              </div>

              <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.95fr]">
                <div>
                  <div className="space-y-5 text-[0.7rem] uppercase leading-[1.2] tracking-[0.08em] text-[#F3F0EA]">
                    <div className="flex items-center gap-3" data-moethuzar-frontend-architecture-visual-item>
                      <FolderIcon />
                      <span>App/</span>
                    </div>
                    <div className="ml-6 flex items-center gap-3 text-[#7C8A9A]" data-moethuzar-frontend-architecture-visual-item>
                      <FolderIcon />
                      <span>(Shop)</span>
                    </div>
                    <div className="ml-10 flex items-center justify-between gap-3" data-moethuzar-frontend-architecture-visual-item>
                      <div className="flex items-center gap-3">
                        <FolderIcon />
                        <span>Checkout/</span>
                      </div>
                      <span className="text-[0.5rem] italic tracking-normal text-[#7C8A9A]">Feature</span>
                    </div>
                    <div className="ml-10 flex items-center gap-3 text-[#7C8A9A]" data-moethuzar-frontend-architecture-visual-item>
                      <FolderIcon />
                      <span>Catalog/</span>
                    </div>
                    <div className="ml-10 flex items-center justify-between gap-3 text-[#7C8A9A]" data-moethuzar-frontend-architecture-visual-item>
                      <div className="flex items-center gap-3">
                        <FolderIcon />
                        <span>Auth/</span>
                      </div>
                      <span className="text-[0.5rem] italic tracking-normal text-[#7C8A9A]">Staged flow</span>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-[#20242B] pt-8" data-moethuzar-frontend-architecture-visual-item>
                    <div className="flex items-center gap-3 text-[0.7rem] uppercase leading-[1.2] tracking-[0.08em] text-[#F3F0EA]">
                      <BoxIcon />
                      <span>Shared/UI</span>
                    </div>
                    <p className="mt-4 text-[0.52rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
                      Primitives & design system
                    </p>
                  </div>
                </div>

                <div className="border-l border-[#20242B] pl-5 lg:pl-8">
                  <div className="mt-6 hidden h-px w-8 bg-[#20242B] md:block" />
                  <SchematicPanel
                    label="Server"
                    title="Layout & data fetching"
                    detail="Only over the wire"
                  />
                  <div className="ml-9 mt-8 h-8 w-px bg-[#20242B]" data-moethuzar-frontend-architecture-visual-item />
                  <SchematicPanel
                    label="Client"
                    title="Interactive components"
                    detail="Hydrated islands (Cart, forms)"
                    align="right"
                  />
                </div>
              </div>

              <div className="mt-12 flex items-end justify-between border-t border-[#20242B] pt-8">
                <p className="text-[0.55rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
                  {principles[3] ?? "Progressive hydration strategy"}
                </p>
                <SystemMark />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-start-8 lg:col-end-13">
            <div data-moethuzar-frontend-architecture-phase="phase1">
              <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
                {label}
              </p>
              <h2
                id="moethuzar-frontend-architecture-title"
                className="mt-6 max-w-[23rem] font-display text-[clamp(3rem,5.8vw,4.5rem)] italic leading-[0.92] tracking-[-0.055em] text-[#F3F0EA]"
              >
                {title}
              </h2>
            </div>

            <div
              className="mt-10 max-w-[19rem] space-y-8"
              data-moethuzar-frontend-architecture-phase="phase2"
            >
              <p className="text-[1.125rem] leading-[1.6] tracking-[-0.02em] text-[#CFC8BE]">
                {summary}
              </p>
              <p className="text-[1rem] leading-[1.65] tracking-[-0.015em] text-[#7C8A9A]">
                {detail}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
