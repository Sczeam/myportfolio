import type { ReactNode } from "react";

import Image from "next/image";

import { Container } from "@/components/ui/container";

type LogicPoint = {
  title: string;
  body: string;
};

type MoethuzarAdminToolsProps = {
  label: string;
  title: string;
  body: string;
  logicPoints: LogicPoint[];
};

function ObservationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#7C8A9A]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <rect x="4.5" y="5.5" width="15" height="13" rx="1.5" />
      <path d="M8 10.5h3v5H8zM13 8.5h3v7h-3z" />
    </svg>
  );
}

function GovernanceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#7C8A9A]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 4.5v2.5M12 17v2.5M19.5 12H17M7 12H4.5M17.3 6.7l-1.8 1.8M8.5 15.5l-1.8 1.8M17.3 17.3l-1.8-1.8M8.5 8.5 6.7 6.7" />
    </svg>
  );
}

function LogicCard({
  title,
  body,
  icon,
}: LogicPoint & { icon: ReactNode }) {
  return (
    <div data-moethuzar-admin-tools-phase="phase4">
      <div className="flex items-center gap-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#20242B] bg-[#14161A]">
          {icon}
        </span>
      </div>
      <h4 className="mt-4 font-sans text-[0.75rem] uppercase leading-[1.2] tracking-[0.08em] text-[#F3F0EA]">
        {title}
      </h4>
      <p className="mt-3 max-w-[11rem] text-[0.92rem] leading-[1.55] tracking-[-0.015em] text-[#7C8A9A]">
        {body}
      </p>
    </div>
  );
}

export function MoethuzarAdminTools({
  label,
  title,
  body,
  logicPoints,
}: MoethuzarAdminToolsProps) {
  const [summary, detail] = body.split("\n\n");

  return (
    <section
      data-moethuzar-admin-tools
      aria-labelledby="moethuzar-admin-tools-title"
      className="relative bg-[#0E0F11] pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-[12rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          <div
            className="lg:col-start-1 lg:col-end-8"
            data-moethuzar-admin-tools-phase="phase1"
          >
            <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
              {label}
            </p>
            <h2
              id="moethuzar-admin-tools-title"
              className="mt-6 max-w-[36rem] font-display text-[clamp(3rem,6.5vw,5.2rem)] leading-[0.92] tracking-[-0.055em] text-[#F3F0EA] lg:max-w-[39rem]"
            >
              {title}
            </h2>
          </div>

          <div
            className="lg:col-start-9 lg:col-end-13 lg:pt-1"
            data-moethuzar-admin-tools-phase="phase2"
          >
            <p className="max-w-[16rem] text-[1.05rem] leading-[1.6] tracking-[-0.02em] text-[#7C8A9A] lg:text-right">
              {summary}
            </p>
          </div>

          <div className="lg:col-start-1 lg:col-end-8 lg:pt-[4rem]">
            <div
              className="relative min-h-[20rem] overflow-visible lg:min-h-[24rem]"
              data-moethuzar-admin-tools-phase="phase3"
            >
              <div className="relative h-[15rem] w-[82%] overflow-hidden border border-[#20242B] bg-[#EEE8DF] shadow-none sm:h-[18rem] lg:h-[20rem] lg:w-[76%]">
                <Image
                  src="/images/projects/admintool.png"
                  alt="Moethuzar admin catalog interface"
                  fill
                  className="object-cover object-left-top"
                  sizes="(min-width: 1024px) 48vw, 92vw"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-[13rem] border border-[#20242B] bg-[#14161A] p-5 sm:w-[14rem] lg:w-[15.5rem] lg:p-6">
                <div className="flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.1em] text-[#74706A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7C8A9A]" />
                  <span>Live inventory</span>
                </div>
                <div className="mt-7 space-y-5">
                  <div className="space-y-3">
                    <div className="h-[0.125rem] w-[62%] bg-[#20242B]" />
                    <div className="h-[0.125rem] w-[48%] bg-[#20242B]" />
                  </div>
                  <div className="border-t border-[#20242B] pt-5">
                    <div className="flex items-end justify-between gap-4">
                      <p className="font-display text-[2.1rem] leading-none tracking-[-0.04em] text-[#F3F0EA]">
                        842
                      </p>
                      <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#7C8A9A]">
                        +12%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-start-8 lg:col-end-13 lg:pt-[4rem]">
            <div className="border-l border-[#20242B] pl-6 lg:pl-8">
              <div data-moethuzar-admin-tools-phase="phase4">
                <h3 className="font-display text-[1.9rem] italic leading-[1.02] tracking-[-0.04em] text-[#F3F0EA]">
                  Custom Control Plane
                </h3>
                <p className="mt-5 max-w-[18rem] text-[1.08rem] leading-[1.65] tracking-[-0.02em] text-[#7C8A9A]">
                  {detail}
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <LogicCard
                  title={logicPoints[0]?.title ?? "Observation"}
                  body={logicPoints[0]?.body ?? ""}
                  icon={<ObservationIcon />}
                />
                <LogicCard
                  title={logicPoints[1]?.title ?? "Governance"}
                  body={logicPoints[1]?.body ?? ""}
                  icon={<GovernanceIcon />}
                />
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
