"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const thesisEasePrimary = CustomEase.create(
  "thesis-ease-primary",
  "0.22,1,0.36,1",
);

export function ThesisSectionMotion() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-opening-thesis]");
    const lines = gsap.utils.toArray<HTMLElement>("[data-thesis-line-inner]");
    const note = document.querySelector<HTMLElement>("[data-opening-thesis-note]");

    if (!section || lines.length === 0 || !note) {
      return;
    }

    const media = gsap.matchMedia();

    media.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        mobile: "(max-width: 767px)",
      },
      (context) => {
        if (context.conditions?.reduceMotion) {
          gsap.set([...lines, note], {
            clearProps: "all",
          });
          return;
        }

        gsap.set(lines, {
          opacity: 0,
          yPercent: 140,
        });
        gsap.set(note, {
          opacity: 0,
          y: 24,
        });

        const thesisReveal = gsap.timeline({
          defaults: {
            ease: thesisEasePrimary,
          },
          scrollTrigger: {
            trigger: section,
            start: context.conditions?.mobile ? "top 92%" : "top 86%",
            toggleActions: "play none none reverse",
          },
        });

        thesisReveal.to(
          lines,
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.72,
            stagger: 0.12,
          },
          0,
        );

        thesisReveal.to(
          note,
          {
            opacity: 1,
            y: 0,
            duration: 0.56,
          },
          0.28,
        );

        return () => {
          thesisReveal.kill();
          gsap.set([...lines, note], {
            clearProps: "all",
          });
        };
      },
    );

    return () => {
      media.revert();
    };
  }, []);

  return null;
}
