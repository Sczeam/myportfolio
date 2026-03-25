import { Container } from "@/components/ui/container";

type MoethuzarReliabilitySecurityProps = {
  label: string;
  title: string;
  body: string;
  securityPoints: string[];
  reliabilityPoints: string[];
  closing: string;
};

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#74706A]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M12 3.5 18.5 6v5.4c0 3.7-2.3 7.1-6.5 9.1-4.2-2-6.5-5.4-6.5-9.1V6z" />
      <path d="M12 8.5v5" />
      <circle cx="12" cy="16.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function RecoveryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#74706A]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M6.5 10A6 6 0 1 1 8 16.5" />
      <path d="M6.5 5.5v4.5H11" />
    </svg>
  );
}

function Field({
  eyebrow,
  title,
  points,
  icon,
  phase,
}: {
  eyebrow: string;
  title: string;
  points: string[];
  icon: React.ReactNode;
  phase: "phase3";
}) {
  return (
    <div
      className="border border-[#20242B] bg-[#14161A] px-6 py-7 sm:px-7"
      data-moethuzar-reliability-security-phase={phase}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-[0.58rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
          {eyebrow}
        </p>
        {icon}
      </div>

      <h3 className="mt-10 font-display text-[2.2rem] italic leading-[1.02] tracking-[-0.04em] text-[#F3F0EA]">
        {title}
      </h3>

      <div className="mt-8 space-y-8">
        {points.map((point, index) => (
          <div key={`${index}-${point}`} className="border-l border-[#20242B] pl-5">
            <p className="text-[1rem] leading-[1.7] tracking-[-0.015em] text-[#CFC8BE]">
              {point}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3 pt-4">
        {points.slice(0, 3).map((point, index) => (
          <div
            key={`${index}-${point}`}
            className="inline-flex items-center gap-3 border border-[#20242B] bg-[rgba(255,255,255,0.012)] px-3 py-2"
          >
            <span className="text-[0.5rem] uppercase leading-[1.2] tracking-[0.08em] text-[#74706A]">
              {point.split(" ").slice(0, 2).join(" ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MoethuzarReliabilitySecurity({
  label,
  title,
  body,
  securityPoints,
  reliabilityPoints,
  closing,
}: MoethuzarReliabilitySecurityProps) {
  return (
    <section
      data-moethuzar-reliability-security
      aria-labelledby="moethuzar-reliability-security-title"
      className="relative bg-[#0E0F11] pb-28 pt-24 sm:pb-32 sm:pt-28 lg:pb-[14rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          <div
            className="lg:col-start-1 lg:col-end-9"
            data-moethuzar-reliability-security-phase="phase1"
          >
            <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
              {label}
            </p>
            <h2
              id="moethuzar-reliability-security-title"
              className="mt-6 max-w-[36rem] font-display text-[clamp(3rem,6vw,4.8rem)] italic leading-[0.94] tracking-[-0.055em] text-[#F3F0EA]"
            >
              {title}.
            </h2>
          </div>

          <div
            className="lg:col-start-1 lg:col-end-7 lg:pt-[3.5rem]"
            data-moethuzar-reliability-security-phase="phase2"
          >
            <p className="max-w-[42rem] text-[1.125rem] leading-[1.7] tracking-[-0.02em] text-[#CFC8BE]">
              {body}
            </p>
          </div>

          <div className="lg:col-start-1 lg:col-end-12 lg:pt-[6rem]">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
              <Field
                eyebrow="Guardrail v.03 (Security)"
                title="Security"
                points={securityPoints}
                icon={<ShieldIcon />}
                phase="phase3"
              />
              <Field
                eyebrow="Recovery v.04 (Reliability)"
                title="Reliability"
                points={reliabilityPoints}
                icon={<RecoveryIcon />}
                phase="phase3"
              />
            </div>
          </div>

          <div
            className="lg:col-start-1 lg:col-end-9 lg:pt-[5rem]"
            data-moethuzar-reliability-security-phase="phase4"
          >
            <p className="max-w-[34rem] font-display text-[1.5rem] italic leading-[1.25] tracking-[-0.03em] text-[rgba(243,240,234,0.8)]">
              {closing}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
