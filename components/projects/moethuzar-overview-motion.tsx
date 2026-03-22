"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const moethuzarOverviewEase = CustomEase.create(
  "moethuzar-overview-ease",
  "0.16,1,0.3,1",
);

export function MoethuzarOverviewMotion() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>(
      "[data-moethuzar-overview]",
    );
    const headingGroup = gsap.utils.toArray<HTMLElement>(
      "[data-moethuzar-overview-heading]",
    );
    const body = document.querySelector<HTMLElement>(
      "[data-moethuzar-overview-body]",
    );

    if (!section || headingGroup.length === 0 || !body) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return;
    }

    const scope = gsap.context(() => {
      gsap.set(headingGroup, {
        y: 12,
        opacity: 0,
      });
      gsap.set(body, {
        y: 8,
        opacity: 0,
      });

      let hasPlayed = false;
      let reveal: gsap.core.Timeline | null = null;

      const play = () => {
        if (hasPlayed) {
          return;
        }

        hasPlayed = true;
        reveal = gsap.timeline({
          defaults: {
            ease: moethuzarOverviewEase,
          },
        });

        reveal.to(
          headingGroup,
          {
            y: 0,
            opacity: 1,
            duration: 0.56,
          },
          0,
        );

        reveal.to(
          body,
          {
            y: 0,
            opacity: 1,
            duration: 0.56,
          },
          0.15,
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
