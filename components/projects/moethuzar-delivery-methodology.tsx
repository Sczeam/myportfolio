import { Container } from "@/components/ui/container";

type MoethuzarDeliveryMethodologyProps = {
  label: string;
  title: string;
  body: string;
  items: Array<{
    title: string;
    body: string;
  }>;
};

export function MoethuzarDeliveryMethodology({
  label,
  title,
  body,
  items,
}: MoethuzarDeliveryMethodologyProps) {
  return (
    <section
      data-moethuzar-delivery-methodology
      aria-labelledby="moethuzar-delivery-methodology-title"
      className="relative bg-[#0E0F11] pb-28 pt-24 sm:pb-32 sm:pt-28 lg:pb-[14rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          <div
            className="lg:col-start-1 lg:col-end-6 lg:sticky lg:top-[12rem] lg:self-start"
            data-moethuzar-delivery-methodology-phase="phase1"
          >
            <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
              {label}
            </p>
            <h2
              id="moethuzar-delivery-methodology-title"
              className="mt-6 max-w-[24rem] font-display text-[clamp(3rem,6vw,4.9rem)] leading-[0.92] tracking-[-0.06em] text-[#F3F0EA]"
            >
              {title}
            </h2>
          </div>

          <div
            className="lg:col-start-7 lg:col-end-13 lg:border-l lg:border-[#20242B] lg:pl-8"
          >
            <div
              className="max-w-[24rem]"
              data-moethuzar-delivery-methodology-phase="phase2"
            >
              <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#7C8A9A]">
                Process strategy
              </p>
              <p className="mt-8 max-w-[24rem] text-[1.25rem] leading-[1.6] tracking-[-0.02em] text-[#CFC8BE]">
                {body}
              </p>
            </div>

            <div className="mt-24 space-y-[4.5rem] lg:mt-32">
              {items.map((item, index) => (
                <div
                  key={`${index}-${item.title}`}
                  className="pb-8 border-b border-[#20242B] last:border-b-0 last:pb-0"
                  data-moethuzar-delivery-methodology-item
                >
                  <h3 className="max-w-[25rem] font-display text-[1.75rem] italic leading-[1.08] tracking-[-0.04em] text-[#F3F0EA]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[24rem] text-[1.125rem] leading-[1.6] tracking-[-0.02em] text-[#CFC8BE]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
