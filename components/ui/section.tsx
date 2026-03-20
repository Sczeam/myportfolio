import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "@/components/ui/container";

type SectionTone = "default" | "tight";
type SectionWidth = "default" | "wide" | "reading";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  width?: SectionWidth;
  tone?: SectionTone;
  containerClassName?: string;
};

const toneClasses: Record<SectionTone, string> = {
  default: "section-rhythm",
  tight: "section-rhythm-tight",
};

export function Section({
  children,
  className,
  width = "default",
  tone = "default",
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section className={cn(toneClasses[tone], className)} {...props}>
      <Container width={width} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
