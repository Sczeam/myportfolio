import { Container } from "@/components/ui/container";

type SubchapterPoint = {
  title: string;
  body: string;
};

type MoethuzarCommerceDomainModelProps = {
  label: string;
  title: string;
  body: string;
  subchapterTitle: string;
  subchapterPoints: SubchapterPoint[];
};

function DiagramNode({
  label,
  accent = false,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`inline-flex min-w-[7rem] items-center justify-between gap-4 border px-3 py-2 ${
        accent
          ? "border-[#7C8A9A] bg-[rgba(124,138,154,0.04)]"
          : "border-[#20242B] bg-[rgba(255,255,255,0.012)]"
      }`}
      data-moethuzar-commerce-domain-cluster-item
    >
      <span className="text-[0.62rem] uppercase leading-[1.2] tracking-[0.08em] text-[#F3F0EA]">
        {label}
      </span>
      <span className="h-1 w-1 rounded-full bg-[#7C8A9A]" />
    </div>
  );
}

function SubchapterCard({ title, body }: SubchapterPoint) {
  return (
    <div data-moethuzar-commerce-domain-phase="phase4">
      <p className="text-[0.72rem] uppercase leading-[1.2] tracking-[0.08em] text-[#F3F0EA]">
        {title}
      </p>
      <p className="mt-4 max-w-[14rem] text-[0.94rem] leading-[1.65] tracking-[-0.015em] text-[#7C8A9A]">
        {body}
      </p>
    </div>
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

export function MoethuzarCommerceDomainModel({
  label,
  title,
  body,
  subchapterTitle,
  subchapterPoints,
}: MoethuzarCommerceDomainModelProps) {
  return (
    <section
      data-moethuzar-commerce-domain-model
      aria-labelledby="moethuzar-commerce-domain-model-title"
      className="relative bg-[#0E0F11] pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-[12rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          <div
            className="lg:col-start-1 lg:col-end-7"
            data-moethuzar-commerce-domain-phase="phase1"
          >
            <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
              {label}
            </p>
            <h2
              id="moethuzar-commerce-domain-model-title"
              className="mt-6 max-w-[30rem] font-display text-[clamp(3rem,6vw,5rem)] italic leading-[0.9] tracking-[-0.06em] text-[#F3F0EA]"
            >
              {title}
            </h2>
          </div>

          <div
            className="lg:col-start-1 lg:col-end-6 lg:pt-[3.75rem]"
            data-moethuzar-commerce-domain-phase="phase2"
          >
            <p className="max-w-[28rem] text-[1.125rem] leading-[1.6] tracking-[-0.02em] text-[#CFC8BE]">
              {body}
            </p>
          </div>

          <div className="lg:col-start-7 lg:col-end-13 lg:row-span-2 lg:pt-1">
            <div
              className="border border-[#20242B] bg-[#14161A] px-5 py-6 sm:px-7 sm:py-7 lg:px-6 lg:py-7"
              data-moethuzar-commerce-domain-phase="phase3"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.58rem] uppercase leading-[1.2] tracking-[0.1em] text-[#7C8A9A]">
                    Domain model map v0.1
                  </p>
                  <p className="mt-2 text-[0.58rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
                    Ref. Project: Moethuzar
                  </p>
                </div>
                <p className="text-[0.5rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
                  Scale 1:50 / R01
                </p>
              </div>

              <div
                className="mt-14 border-t border-[#20242B] pt-10"
                data-moethuzar-commerce-domain-cluster="catalog"
              >
                <p className="mb-6 text-[0.58rem] uppercase leading-[1.2] tracking-[0.1em] text-[#7C8A9A]">
                  Catalog
                </p>
                <div className="flex items-center justify-between gap-4">
                  <DiagramNode label="Product" />
                  <span className="h-px flex-1 bg-[#20242B]" data-moethuzar-commerce-domain-cluster-item />
                  <DiagramNode label="ProductVariant" accent />
                </div>
              </div>

              <div
                className="mt-14 border-t border-[#20242B] pt-10"
                data-moethuzar-commerce-domain-cluster="lifecycle"
              >
                <p className="mb-6 text-[0.58rem] uppercase leading-[1.2] tracking-[0.1em] text-[#7C8A9A]">
                  Order lifecycle
                </p>
                <div className="grid gap-5 sm:grid-cols-[1fr_1fr]">
                  <div>
                    <DiagramNode label="Cart" />
                    <p className="mt-4 pl-2 text-[0.52rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
                      CartItem
                    </p>
                  </div>
                  <div>
                    <DiagramNode label="Order" accent />
                    <p className="mt-4 pl-2 text-[0.52rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
                      OrderItem
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="mt-14 border-t border-[#20242B] pt-10"
                data-moethuzar-commerce-domain-cluster="async"
              >
                <p className="mb-6 text-[0.58rem] uppercase leading-[1.2] tracking-[0.1em] text-[#7C8A9A]">
                  Wishlist async model
                </p>
                <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                  <div>
                    <p className="text-[0.62rem] uppercase leading-[1.2] tracking-[0.08em] text-[#F3F0EA]">
                      WishlistItem
                    </p>
                    <p className="mt-2 text-[0.5rem] uppercase leading-[1.2] tracking-[0.08em] text-[#74706A]">
                      Canonical write
                    </p>
                  </div>
                  <span className="hidden h-px w-10 bg-[#20242B] md:block" data-moethuzar-commerce-domain-cluster-item />
                  <div className="border border-[#7C8A9A] bg-[rgba(124,138,154,0.04)] px-3 py-2" data-moethuzar-commerce-domain-cluster-item>
                    <p className="text-[0.56rem] uppercase leading-[1.2] tracking-[0.08em] text-[#F3F0EA]">
                      EventOutbox
                    </p>
                    <p className="mt-2 text-[0.5rem] uppercase leading-[1.2] tracking-[0.08em] text-[#74706A]">
                      Durable ledger
                    </p>
                  </div>
                  <span className="hidden h-px w-10 bg-[#20242B] md:block" data-moethuzar-commerce-domain-cluster-item />
                  <div>
                    <p className="text-[0.62rem] uppercase leading-[1.2] tracking-[0.08em] text-[#F3F0EA]">
                      WishlistItemView
                    </p>
                    <p className="mt-2 text-[0.5rem] uppercase leading-[1.2] tracking-[0.08em] text-[#74706A]">
                      Derived read model
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-end justify-between border-t border-[#20242B] pt-8">
                <div>
                  <p className="text-[0.55rem] uppercase leading-[1.2] tracking-[0.1em] text-[#7C8A9A]">
                    System truth architecture
                  </p>
                  <p className="mt-2 font-display text-[1rem] italic leading-[1] tracking-[-0.03em] text-[#F3F0EA]">
                    Canonical state persistence
                  </p>
                </div>
                <SystemMark />
              </div>
            </div>
          </div>

          <div
            className="lg:col-start-1 lg:col-end-7 lg:pt-[6rem]"
            data-moethuzar-commerce-domain-phase="phase4"
          >
            <div className="border-t border-[#20242B] pt-8">
              <h3 className="font-display text-[2.1rem] italic leading-[1.02] tracking-[-0.04em] text-[#F3F0EA]">
                {subchapterTitle}
              </h3>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {subchapterPoints.map((point, index) => (
                  <SubchapterCard
                    key={`${index}-${point.title}`}
                    title={point.title}
                    body={point.body}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
