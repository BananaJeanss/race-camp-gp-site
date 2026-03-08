"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const handleScroll = () => {
      const bounceArrow = document.querySelector(
        ".animate-bounce"
      ) as HTMLElement;
      if (bounceArrow == null) return;
      bounceArrow.style.opacity = window.scrollY > 25 ? "0" : "1";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const expectedKeys = "ilovef1".split("");
    let currentIndex = 0;
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === expectedKeys[currentIndex]) {
        currentIndex++;
        if (currentIndex === expectedKeys.length) {
          const video = document.querySelector("video") as HTMLVideoElement;
          if (video) video.muted = !video.muted;
          currentIndex = 0;
        }
      } else {
        currentIndex = 0;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
