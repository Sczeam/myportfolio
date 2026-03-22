import Image from "next/image";

import { Container } from "@/components/ui/container";

type MoethuzarOpeningFrameProps = {
  title: string;
  summary: string;
  metadata: {
    role_label: string;
    role_value: string;
    type_label: string;
    type_value: string;
    stack_label: string;
    stack_value: string;
  };
};

type MetaFieldProps = {
  label: string;
  value: string;
  className?: string;
};

function MetaField({ label, value, className }: MetaFieldProps) {
  return (
    <div className={className} data-moethuzar-opening-meta>
      <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
        {label}
      </p>
      <p className="mt-2 text-[0.96rem] leading-[1.45] tracking-[-0.01em] text-[#F3F0EA]">
        {value}
      </p>
    </div>
  );
}

export function MoethuzarOpeningFrame({
  title,
  summary,
  metadata,
}: MoethuzarOpeningFrameProps) {
  return (
    <section
      data-moethuzar-opening
      aria-labelledby="moethuzar-opening-title"
      className="relative isolate min-h-svh overflow-clip bg-[#0E0F11] pt-[5.5rem]"
    >
      <div
        className="absolute inset-0 overflow-hidden"
        data-moethuzar-opening-atmosphere
      >
        <div className="absolute inset-0 bg-[#0E0F11]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,15,17,0.16)_0%,rgba(14,15,17,0.08)_22%,rgba(14,15,17,0.72)_76%,rgba(14,15,17,0.98)_100%)]" />
        <div className="absolute inset-y-0 left-0 z-10 w-[36%] bg-[linear-gradient(90deg,rgba(14,15,17,0.96)_0%,rgba(14,15,17,0.86)_36%,rgba(14,15,17,0.36)_78%,rgba(14,15,17,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-[13rem] bg-[linear-gradient(180deg,rgba(14,15,17,0)_0%,rgba(14,15,17,0.84)_72%,rgba(14,15,17,0.98)_100%)]" />
        <div className="absolute right-0 top-0 h-full w-[82%]">
          <Image
            src="/images/projects/moe.png"
            alt="Dark interior fashion storefront atmosphere for the Moethuzar case study"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[64%_24%] opacity-[0.42] grayscale-[0.28] contrast-[0.88] brightness-[0.34]"
          />
        </div>
      </div>

      <Container width="wide" className="relative h-full lg:px-[8.5rem]">
        <div className="grid min-h-[calc(100svh-5.5rem)] grid-cols-1 grid-rows-[1fr_auto] gap-10 pb-8 pt-6 sm:pb-10 lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:gap-x-6 lg:pb-10 lg:pt-6">
          <div className="relative z-20 flex flex-col justify-end pt-8 lg:col-span-7 lg:max-w-[46rem] lg:justify-center lg:pt-0">
            <div
              className="block overflow-hidden pb-5 lg:pb-7"
              data-moethuzar-opening-title-mask
            >
              <h1
                id="moethuzar-opening-title"
                className="font-display text-[clamp(3.75rem,12vw,5.5rem)] italic leading-[0.9] tracking-[-0.055em] text-[#F3F0EA] lg:text-[clamp(8.5rem,11vw,10.5rem)]"
                data-moethuzar-opening-title
              >
                {title}
              </h1>
            </div>

            <p
              className="mt-4 max-w-[31.5rem] text-[clamp(1.5rem,1.42rem+0.42vw,1.75rem)] font-medium leading-[1.32] tracking-[-0.02em] text-[#F3F0EA] lg:mt-10 lg:ml-[4.5rem]"
              data-moethuzar-opening-summary
            >
              {summary}
            </p>
          </div>

          <div className="hidden lg:col-span-5 lg:block" />

          <div className="relative z-20 border-t border-[#20242B] pt-4 lg:col-span-12 lg:pt-5">
            <div className="grid gap-5 lg:grid-cols-[10rem_12rem_minmax(0,1fr)_auto] lg:items-start lg:gap-x-8">
              <MetaField
                label={metadata.role_label}
                value={metadata.role_value}
                className="max-w-[9rem]"
              />
              <MetaField
                label={metadata.type_label}
                value={metadata.type_value}
                className="max-w-[12rem]"
              />
              <MetaField
                label={metadata.stack_label}
                value={metadata.stack_value}
                className="max-w-[34rem]"
              />
              <p
                className="justify-self-start self-end text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A] lg:justify-self-end"
                data-moethuzar-opening-meta
              >
                01 - Case Study
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
