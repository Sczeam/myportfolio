"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const moethuzarOpeningEase = CustomEase.create(
  "moethuzar-opening-ease",
  "0.16,1,0.3,1",
);

export function MoethuzarOpeningFrameMotion() {
  useLayoutEffect(() => {
    const atmosphere = document.querySelector<HTMLElement>(
      "[data-moethuzar-opening-atmosphere]",
    );
    const titleMask = document.querySelector<HTMLElement>(
      "[data-moethuzar-opening-title-mask]",
    );
    const titleText = document.querySelector<HTMLElement>(
      "[data-moethuzar-opening-title]",
    );
    const summary = document.querySelector<HTMLElement>(
      "[data-moethuzar-opening-summary]",
    );
    const metadata = gsap.utils.toArray<HTMLElement>(
      "[data-moethuzar-opening-meta]",
    );

    if (!atmosphere || !titleMask || !titleText || !summary || metadata.length === 0) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return;
    }

    const scope = gsap.context(() => {
      gsap.set(atmosphere, {
        opacity: 0,
        scale: 1.05,
        transformOrigin: "center center",
      });
      gsap.set(titleMask, {
        clipPath: "inset(0 0 100% 0)",
      });
      gsap.set(titleText, {
        y: 28,
        opacity: 0,
      });
      gsap.set(summary, {
        y: 12,
        opacity: 0,
      });
      gsap.set(metadata, {
        y: 12,
        opacity: 0,
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: moethuzarOpeningEase,
        },
      });

      timeline.to(
        atmosphere,
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
        },
        0,
      );

      timeline.to(
        titleText,
        {
          y: 0,
          opacity: 1,
          duration: 0.92,
        },
        0.2,
      );

      timeline.to(
        titleMask,
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.92,
        },
        0.2,
      );

      timeline.set(
        titleMask,
        {
          clearProps: "clipPath",
        },
        1.18,
      );

      timeline.set(
        titleText,
        {
          clearProps: "transform,opacity",
        },
        1.18,
      );

      timeline.to(
        summary,
        {
          y: 0,
          opacity: 1,
          duration: 0.56,
        },
        0.84,
      );

      timeline.to(
        metadata,
        {
          y: 0,
          opacity: 1,
          duration: 0.56,
        },
        0.94,
      );
    });

    return () => scope.revert();
  }, []);

  return null;
}
