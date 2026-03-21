"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CustomEase, ScrollTrigger);

const closingInvitationEase = CustomEase.create(
  "closing-invitation-ease",
  "0.4,0,0.2,1",
);

export function ClosingInvitationMotion() {
  useLayoutEffect(() => {
    const section = document.querySelector<HTMLElement>(
      "[data-closing-invitation]",
    );
    if (!section) {
      return;
    }

    const fadeTargets = section.querySelectorAll<HTMLElement>(
      "[data-closing-invitation-fade]",
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!fadeTargets.length || reduceMotion.matches) {
      return;
    }

    const reset = () => {
      gsap.set(fadeTargets, {
        opacity: 0,
      });
    };

    reset();

    let hasPlayed = false;
    let reveal: gsap.core.Tween | null = null;

    const play = () => {
      if (hasPlayed) {
        return;
      }

      hasPlayed = true;
      reveal = gsap.to(fadeTargets, {
        opacity: 1,
        duration: 0.24,
        ease: closingInvitationEase,
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 85%",
      invalidateOnRefresh: true,
      onEnter: play,
    });

    return () => {
      trigger.kill();
      reveal?.kill();
      reset();
    };
  }, []);

  return null;
}
