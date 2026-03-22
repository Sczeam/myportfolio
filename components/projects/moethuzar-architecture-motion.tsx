"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const moethuzarArchitectureEase = CustomEase.create(
  "moethuzar-architecture-ease",
  "0.16,1,0.3,1",
);

export function MoethuzarArchitectureMotion() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>(
      "[data-moethuzar-architecture]",
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
        section.querySelectorAll('[data-moethuzar-architecture-phase="phase1"]'),
      );
      const phase2 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-architecture-phase="phase2"]'),
      );
      const phase4 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-architecture-phase="phase4"]'),
      );
      const plane = section.querySelector<HTMLElement>(
        "[data-moethuzar-architecture-plane]",
      );
      const layers = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-moethuzar-architecture-layer]"),
      );

      if (
        phase1.length === 0 ||
        phase2.length === 0 ||
        phase4.length === 0 ||
        !plane ||
        layers.length === 0
      ) {
        return;
      }

      gsap.set(phase1, { y: 12, opacity: 0 });
      gsap.set(phase2, { y: 8, opacity: 0 });
      gsap.set(plane, { y: 12, opacity: 0 });
      gsap.set(layers, { y: 10, opacity: 0 });
      gsap.set(phase4, { opacity: 0 });

      let reveal: gsap.core.Timeline | null = null;
      let hasPlayed = false;

      const play = () => {
        if (hasPlayed) {
          return;
        }

        hasPlayed = true;
        reveal = gsap.timeline({
          defaults: {
            ease: moethuzarArchitectureEase,
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
          },
          0.71,
        );

        reveal.to(
          plane,
          {
            y: 0,
            opacity: 1,
            duration: 0.56,
          },
          1.27,
        );

        reveal.to(
          layers,
          {
            y: 0,
            opacity: 1,
            duration: 0.56,
            stagger: 0.1,
          },
          1.41,
        );

        reveal.to(
          phase4,
          {
            opacity: 1,
            duration: 0.56,
          },
          2.37,
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
