"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const moethuzarFinalFrameEase = CustomEase.create(
  "moethuzar-final-frame-ease",
  "0.16,1,0.3,1",
);

export function MoethuzarFinalFrameMotion() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-moethuzar-final-frame]");

    if (!section) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return;
    }

    const scope = gsap.context(() => {
      const phase1 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-final-frame-phase="phase1"]'),
      );
      const phase3 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-final-frame-phase="phase3"]'),
      );
      const lineMasks = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-moethuzar-final-frame-line-mask]"),
      );
      const lines = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-moethuzar-final-frame-line]"),
      );

      gsap.set(phase1, { y: 12, opacity: 0 });
      gsap.set(phase3, { opacity: 0 });
      gsap.set(lineMasks, { clipPath: "inset(0 0 100% 0)" });
      gsap.set(lines, { y: 32, opacity: 0 });

      let reveal: gsap.core.Timeline | null = null;
      let hasPlayed = false;

      const play = () => {
        if (hasPlayed) {
          return;
        }

        hasPlayed = true;
        reveal = gsap.timeline({
          defaults: { ease: moethuzarFinalFrameEase },
        });

        reveal.to(
          phase1,
          {
            y: 0,
            opacity: 1,
            duration: 0.56,
          },
          0,
        );

        reveal.to(
          lineMasks,
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.1,
            stagger: 0.08,
          },
          0.26,
        );

        reveal.to(
          lines,
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.08,
          },
          0.26,
        );

        reveal.to(
          phase3,
          {
            opacity: 1,
            duration: 0.8,
          },
          1.2,
        );
      };

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        invalidateOnRefresh: true,
        onEnter: play,
      });

      return () => {
        trigger.kill();
        reveal?.kill();
      };
    });

    return () => scope.revert();
  }, []);

  return null;
}
