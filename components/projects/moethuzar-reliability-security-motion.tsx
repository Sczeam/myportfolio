"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const moethuzarReliabilitySecurityEase = CustomEase.create(
  "moethuzar-reliability-security-ease",
  "0.16,1,0.3,1",
);

export function MoethuzarReliabilitySecurityMotion() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-moethuzar-reliability-security]");

    if (!section) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return;
    }

    const scope = gsap.context(() => {
      const phase1 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-reliability-security-phase="phase1"]'),
      );
      const phase2 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-reliability-security-phase="phase2"]'),
      );
      const phase3 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-reliability-security-phase="phase3"]'),
      );
      const phase4 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-reliability-security-phase="phase4"]'),
      );

      if (phase1.length === 0 || phase2.length === 0 || phase3.length === 0 || phase4.length === 0) {
        return;
      }

      gsap.set(phase1, { y: 12, opacity: 0 });
      gsap.set(phase2, { y: 8, opacity: 0 });
      gsap.set(phase3, { y: 8, opacity: 0 });
      gsap.set(phase4, { opacity: 0 });

      let reveal: gsap.core.Timeline | null = null;
      let hasPlayed = false;

      const play = () => {
        if (hasPlayed) {
          return;
        }

        hasPlayed = true;
        reveal = gsap.timeline({
          defaults: { ease: moethuzarReliabilitySecurityEase },
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
          },
          0.71,
        );

        reveal.to(
          phase3,
          {
            y: 0,
            opacity: 1,
            duration: 0.56,
            stagger: 0.05,
          },
          1.27,
        );

        reveal.to(
          phase4,
          {
            opacity: 1,
            duration: 0.9,
          },
          2.05,
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
