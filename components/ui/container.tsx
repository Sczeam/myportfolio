import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerWidth = "default" | "wide" | "reading";

type ContainerProps<T extends ElementType> = {
  as?: T;
  width?: ContainerWidth;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

const widthClasses: Record<ContainerWidth, string> = {
  default: "page-container",
  wide: "wide-container",
  reading: "page-container reading-measure",
};

export function Container<T extends ElementType = "div">({
  as,
  width = "default",
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component className={cn(widthClasses[width], className)} {...props}>
      {children}
    </Component>
  );
}
