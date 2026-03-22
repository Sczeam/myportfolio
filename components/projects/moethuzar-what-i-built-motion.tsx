"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const moethuzarWhatIBuiltEase = CustomEase.create(
  "moethuzar-what-i-built-ease",
  "0.16,1,0.3,1",
);

export function MoethuzarWhatIBuiltMotion() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>(
      "[data-moethuzar-what-i-built]",
    );

    if (!section) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return;
    }

    const scope = gsap.context(() => {
      const phase1 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-built-phase="phase1"]'),
      );
      const phase2 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-built-phase="phase2"]'),
      );
      const phase3 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-built-phase="phase3"]'),
      );

      if (phase1.length === 0 || phase2.length === 0 || phase3.length === 0) {
        return;
      }

      gsap.set([...phase1, ...phase2, ...phase3], {
        y: 12,
        opacity: 0,
      });

      let reveal: gsap.core.Timeline | null = null;
      let hasPlayed = false;

      const play = () => {
        if (hasPlayed) {
          return;
        }

        hasPlayed = true;
        reveal = gsap.timeline({
          defaults: {
            ease: moethuzarWhatIBuiltEase,
          },
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
          phase2,
          {
            y: 0,
            opacity: 1,
            duration: 0.56,
            stagger: 0.05,
          },
          0.86,
        );

        reveal.to(
          phase3,
          {
            y: 0,
            opacity: 1,
            duration: 0.56,
            stagger: 0.05,
          },
          1.82,
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
