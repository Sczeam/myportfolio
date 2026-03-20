import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SurfaceTone = "page" | "lifted" | "inset" | "framed";

type SurfaceProps<T extends ElementType> = {
  as?: T;
  tone?: SurfaceTone;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

const toneClasses: Record<SurfaceTone, string> = {
  page: "surface-page",
  lifted: "surface-lifted",
  inset: "surface-inset",
  framed: "surface-framed",
};

export function Surface<T extends ElementType = "div">({
  as,
  tone = "page",
  className,
  children,
  ...props
}: SurfaceProps<T>) {
  const Component = as ?? "div";

  return (
    <Component className={cn(toneClasses[tone], className)} {...props}>
      {children}
    </Component>
  );
}
