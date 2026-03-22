import { Container } from "@/components/ui/container";

type MoethuzarWhatIBuiltPillar = {
  title: string;
  body: string;
};

type MoethuzarWhatIBuiltProps = {
  label: string;
  title: string;
  pillars: MoethuzarWhatIBuiltPillar[];
};

type PillarCardProps = {
  title: string;
  body: string;
  phase: "phase2" | "phase3";
  className?: string;
  showRule?: boolean;
};

function PillarCard({
  title,
  body,
  phase,
  className,
  showRule = false,
}: PillarCardProps) {
  const lines = title.split("\n");

  return (
    <article
      className={className}
      data-moethuzar-built-phase={phase}
    >
      {showRule ? <div className="mb-7 h-px w-[13rem] bg-[#20242B]" /> : null}

      <h3 className="max-w-[18rem] font-display text-[clamp(2.5rem,5vw,3.15rem)] italic leading-[0.94] tracking-[-0.045em] text-[#F3F0EA]">
        {lines.map((line, index) => (
          <span key={`${index}-${line}`} className="block">
            {line}
          </span>
        ))}
      </h3>

      <p className="mt-7 max-w-[28rem] text-[1.125rem] leading-[1.6] tracking-[-0.02em] text-[#CFC8BE]">
        {body}
      </p>
    </article>
  );
}

export function MoethuzarWhatIBuilt({
  label,
  title,
  pillars,
}: MoethuzarWhatIBuiltProps) {
  const [storefront, checkout, admin, wishlist] = pillars;

  return (
    <section
      data-moethuzar-what-i-built
      aria-labelledby="moethuzar-what-i-built-title"
      className="relative bg-[#0E0F11] pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-[12rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
          <div className="flex items-center gap-4 lg:col-span-12" data-moethuzar-built-phase="phase1">
            <p className="shrink-0 text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
              {label}
            </p>
            <div className="h-px flex-1 bg-[#20242B]" />
          </div>

          <div className="lg:col-start-1 lg:col-end-8 lg:pt-[2.25rem]" data-moethuzar-built-phase="phase1">
            <h2
              id="moethuzar-what-i-built-title"
              className="max-w-[40rem] font-display text-[clamp(3rem,6vw,3.5rem)] italic leading-[1.02] tracking-[-0.05em] text-[#F3F0EA] lg:leading-[1.04]"
            >
              {title}
            </h2>
          </div>

          <PillarCard
            title={storefront.title}
            body={storefront.body}
            phase="phase2"
            className="lg:col-start-1 lg:col-end-5 lg:pt-[6.25rem]"
          />

          <PillarCard
            title={checkout.title}
            body={checkout.body}
            phase="phase2"
            className="lg:col-start-8 lg:col-end-13 lg:pt-[10rem]"
          />

          <PillarCard
            title={admin.title}
            body={admin.body}
            phase="phase3"
            showRule
            className="lg:col-start-1 lg:col-end-4 lg:pt-[8rem]"
          />

          <PillarCard
            title={wishlist.title}
            body={wishlist.body}
            phase="phase3"
            showRule
            className="lg:col-start-5 lg:col-end-9 lg:pt-[13rem]"
          />
        </div>
      </Container>
    </section>
  );
}
