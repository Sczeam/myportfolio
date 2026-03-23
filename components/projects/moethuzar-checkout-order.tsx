import { Container } from "@/components/ui/container";

type LogicPoint = {
  title: string;
  body: string;
};

type MoethuzarCheckoutOrderProps = {
  label: string;
  title: string;
  body: string;
  logicPoints: LogicPoint[];
};

function LogicPointItem({ title, body, className }: LogicPoint & { className?: string }) {
  return (
    <div className={className} data-moethuzar-checkout-phase="phase4">
      <h3 className="font-display text-[1.55rem] italic leading-[1.02] tracking-[-0.035em] text-[#F3F0EA]">
        {title}
      </h3>
      <p className="mt-3 max-w-[16rem] text-[1rem] leading-[1.6] tracking-[-0.015em] text-[#7C8A9A]">
        {body}
      </p>
    </div>
  );
}

export function MoethuzarCheckoutOrder({
  label,
  title,
  body,
  logicPoints,
}: MoethuzarCheckoutOrderProps) {
  const [summary] = body.split("\n\n");
  const steps = [
    { step: "Step 01", title: "Cart validation", bar: "w-[70%]" },
    { step: "Step 02", title: "Inventory check", bar: "w-[74%]" },
    { step: "Boundary", title: "Transaction", bar: "w-[52%]", active: true },
    { step: "Step 03", title: "Pricing snapshot", bar: "w-[62%]" },
    { step: "Step 04", title: "Order creation", bar: "w-[68%]" },
  ];

  return (
    <section
      data-moethuzar-checkout-order
      aria-labelledby="moethuzar-checkout-order-title"
      className="relative bg-[#0E0F11] pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-[12rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
          <div
            className="lg:col-start-1 lg:col-end-9 lg:row-start-1"
            data-moethuzar-checkout-phase="phase1"
          >
            <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
              {label}
            </p>
            <h2
              id="moethuzar-checkout-order-title"
              className="mt-7 max-w-[34rem] font-display text-[clamp(3rem,6vw,4rem)] italic leading-[1.02] tracking-[-0.05em] text-[#F3F0EA]"
            >
              {title}
            </h2>
          </div>

          <div
            className="lg:col-start-1 lg:col-end-6 lg:row-start-2 lg:pt-[3.5rem]"
            data-moethuzar-checkout-phase="phase2"
          >
            <div className="max-w-[32rem] text-[1.125rem] leading-[1.6] tracking-[-0.02em] text-[#7C8A9A]">
              <p>{summary}</p>
            </div>
          </div>

          <div className="lg:col-start-1 lg:col-end-8 lg:row-start-3 lg:pt-[4rem]">
            <div
              className="border border-[#20242B] bg-[#14161A] p-5 sm:p-6 lg:p-7"
              data-moethuzar-checkout-phase="phase3"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[0.625rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
                    System orchestration
                  </p>
                  <p className="mt-2 font-display text-[2rem] italic leading-[0.98] tracking-[-0.04em] text-[#F3F0EA]">
                    Transactional Order Flow
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2 text-[#74706A]">
                  <span className="h-2 w-2 rounded-full bg-current/45" />
                  <span className="h-2 w-2 rounded-full bg-current/75" />
                  <span className="h-2 w-2 rounded-full bg-current" />
                </div>
              </div>

              <div className="mt-7 border border-[#20242B] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,rgba(255,255,255,0.005)_60%,rgba(255,255,255,0.002)_100%)] px-5 py-5 sm:px-6 sm:py-6">
                <div className="grid min-h-[19rem] content-between">
                  <div className="grid gap-3 md:grid-cols-5">
                    {steps.map((item, index) => (
                      <div
                        key={`${index}-${item.title}`}
                        className={`border p-3 ${
                          item.active
                            ? "border-[#7C8A9A] bg-[rgba(124,138,154,0.05)]"
                            : "border-[#20242B] bg-[rgba(255,255,255,0.016)]"
                        }`}
                        data-moethuzar-checkout-diagram-layer
                      >
                        <p className="text-[0.5rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
                          {item.step}
                        </p>
                        <div className="mt-6 space-y-2">
                          <div className="h-px bg-[#20242B]" />
                          <div className={`h-[2px] bg-[#7C8A9A] ${item.bar}`} />
                        </div>
                        <p className="mt-8 text-[0.62rem] uppercase leading-[1.3] tracking-[0.06em] text-[#F3F0EA]">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 hidden items-center justify-between px-2 md:flex">
                    {steps.map((item, index) => (
                      <div key={index} className="flex flex-col items-center gap-3">
                        <span
                          className={`${
                            item.active
                              ? "h-2.5 w-2.5 rotate-45 border border-[#7C8A9A]"
                              : "h-1.5 w-1.5 rounded-full bg-[#7C8A9A]"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-start-9 lg:col-end-13 lg:row-start-3 lg:pt-[4rem]">
            <div className="h-px w-full bg-[#20242B]" />
            <div className="mt-12 h-px w-full bg-[#20242B]" />

            <p className="mt-10 text-[0.625rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
              Orchestration logic
            </p>
            <div className="mt-10 space-y-9">
              {logicPoints.map((point, index) => (
                <LogicPointItem
                  key={`${index}-${point.title}`}
                  title={point.title}
                  body={point.body}
                />
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
