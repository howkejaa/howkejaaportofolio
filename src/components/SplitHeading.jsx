import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SplitHeading({
  text,
  as: Tag = 'h2',
  className = '',
  immediate = false
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const words = el.querySelectorAll('.gsap-word');

    if (prefersReduced) {
      gsap.set(words, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      if (immediate) {
        gsap.fromTo(
          words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.045,
            ease: 'power3.out',
            delay: 0.1
          }
        );
      } else {
        gsap.fromTo(
          words,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.045,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [text, immediate]);

  const wordList = text.split(' ');

  return (
    <Tag ref={containerRef} className={className} aria-label={text}>
      {wordList.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden align-bottom mr-[0.28em]">
          <span className="gsap-word inline-block will-change-transform">{word}</span>
        </span>
      ))}
    </Tag>
  );
}
