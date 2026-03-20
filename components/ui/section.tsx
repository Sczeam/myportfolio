import type { ComponentPropsWithoutRef, ReactNode } from "react";

import type { ContainerWidth } from "@/components/ui/container";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionTone = "default" | "tight";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  width?: ContainerWidth;
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
