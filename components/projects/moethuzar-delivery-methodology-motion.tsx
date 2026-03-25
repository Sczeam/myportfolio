"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const moethuzarDeliveryMethodologyEase = CustomEase.create(
  "moethuzar-delivery-methodology-ease",
  "0.16,1,0.3,1",
);

export function MoethuzarDeliveryMethodologyMotion() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-moethuzar-delivery-methodology]");

    if (!section) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      return;
    }

    const scope = gsap.context(() => {
      const phase1 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-delivery-methodology-phase="phase1"]'),
      );
      const phase2 = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll('[data-moethuzar-delivery-methodology-phase="phase2"]'),
      );
      const items = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-moethuzar-delivery-methodology-item]"),
      );

      if (phase1.length === 0 || phase2.length === 0 || items.length === 0) {
        return;
      }

      gsap.set(phase1, { y: 12, opacity: 0 });
      gsap.set(phase2, { y: 8, opacity: 0 });
      gsap.set(items, { y: 8, opacity: 0 });

      let reveal: gsap.core.Timeline | null = null;
      const itemTriggers: ScrollTrigger[] = [];
      let hasPlayed = false;

      const play = () => {
        if (hasPlayed) {
          return;
        }

        hasPlayed = true;
        reveal = gsap.timeline({
          defaults: { ease: moethuzarDeliveryMethodologyEase },
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

      };

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        invalidateOnRefresh: true,
        onEnter: play,
      });

      items.forEach((item) => {
        let itemPlayed = false;
        const itemTrigger = ScrollTrigger.create({
          trigger: item,
          start: "top 85%",
          invalidateOnRefresh: true,
          onEnter: () => {
            if (itemPlayed) {
              return;
            }

            itemPlayed = true;
            gsap.to(item, {
              y: 0,
              opacity: 1,
              duration: 0.56,
              ease: moethuzarDeliveryMethodologyEase,
            });
          },
        });
        itemTriggers.push(itemTrigger);
      });

      return () => {
        trigger.kill();
        itemTriggers.forEach((itemTrigger) => itemTrigger.kill());
        reveal?.kill();
      };
    });

    return () => scope.revert();
  }, []);

  return null;
}
