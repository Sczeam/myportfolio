"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const openingEasePrimary = CustomEase.create(
  "opening-ease-primary",
  "0.22,1,0.36,1",
);
const openingEaseSecondary = CustomEase.create(
  "opening-ease-secondary",
  "0.4,0,0.2,1",
);

export function OpeningSequenceMotion() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-opening-hero]");
    const heroContent = document.querySelector<HTMLElement>(
      "[data-opening-hero-content]",
    );
    const heroAtmosphere = document.querySelector<HTMLElement>(
      "[data-opening-atmosphere]",
    );
    const heroPortrait = document.querySelector<HTMLElement>(
      "[data-opening-hero-portrait]",
    );
    const thesis = document.querySelector<HTMLElement>("[data-opening-thesis]");
    const thesisLabel = document.querySelector<HTMLElement>(
      "[data-opening-thesis-label]",
    );
    const thesisStatement = document.querySelector<HTMLElement>(
      "[data-opening-thesis-statement]",
    );
    const thesisNote = document.querySelector<HTMLElement>(
      "[data-opening-thesis-note]",
    );

    if (!hero || !thesis || !heroContent || !thesisStatement || !thesisNote) {
      return;
    }

    const media = gsap.matchMedia();
    const thesisTargets = [thesisLabel, thesisStatement, thesisNote].filter(
      Boolean,
    ) as HTMLElement[];

    const resetMotionState = () => {
      gsap.set(thesisTargets, {
        clearProps: "all",
      });
      gsap.set(heroContent, {
        clearProps: "all",
      });
      if (heroAtmosphere) {
        gsap.set(heroAtmosphere, {
          clearProps: "all",
        });
      }
      if (heroPortrait) {
        gsap.set(heroPortrait, {
          clearProps: "all",
        });
      }
    };

    media.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        mobile: "(max-width: 767px)",
      },
      (context) => {
        if (context.conditions?.reduceMotion) {
          resetMotionState();
          return;
        }

        resetMotionState();

        gsap.set(thesisTargets, {
          opacity: 0,
        });
        if (thesisLabel) {
          gsap.set(thesisLabel, {
            y: 4,
          });
        }
        gsap.set(thesisStatement, {
          y: context.conditions?.mobile ? 14 : 18,
        });
        gsap.set(thesisNote, {
          y: context.conditions?.mobile ? 10 : 14,
        });

        const heroRelease = gsap.timeline({
          defaults: {
            ease: openingEaseSecondary,
          },
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: context.conditions?.mobile ? 0.8 : 0.9,
          },
        });

        heroRelease.to(
          heroContent,
          {
            y: context.conditions?.mobile ? -10 : -18,
            opacity: context.conditions?.mobile ? 0.84 : 0.72,
          },
          0,
        );

        if (heroAtmosphere) {
          heroRelease.to(
            heroAtmosphere,
            {
              y: context.conditions?.mobile ? 0 : -10,
              opacity: context.conditions?.mobile ? 0.72 : 0.58,
            },
            0,
          );
        }

        if (heroPortrait && !context.conditions?.mobile) {
          heroRelease.to(
            heroPortrait,
            {
              y: -8,
              opacity: 0.82,
            },
            0,
          );
        }

        const thesisReveal = gsap.timeline({
          defaults: {
            ease: openingEasePrimary,
          },
          scrollTrigger: {
            trigger: thesis,
            start: context.conditions?.mobile ? "top 92%" : "top 88%",
            toggleActions: "play none none reverse",
          },
        });

        if (thesisLabel) {
          thesisReveal.to(
            thesisLabel,
            {
              opacity: 1,
              y: 0,
              duration: 0.34,
            },
            0,
          );
        }

        thesisReveal.to(
          thesisStatement,
          {
            opacity: 1,
            y: 0,
            duration: context.conditions?.mobile ? 0.68 : 0.82,
          },
          0.06,
        );

        thesisReveal.to(
          thesisNote,
          {
            opacity: 1,
            y: 0,
            duration: context.conditions?.mobile ? 0.52 : 0.62,
          },
          0.16,
        );

        return () => {
          heroRelease.kill();
          thesisReveal.kill();
          resetMotionState();
        };
      },
    );

    return () => {
      media.revert();
    };
  }, []);

  return null;
}
