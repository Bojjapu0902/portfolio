import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";

/**
 * Intro preloader.
 *
 * It plays once per page load. React Router keeps the app alive between
 * routes, so without this guard the whole animation would replay — and block
 * the page — on every single in-app navigation.
 */
let hasPlayed = false;

// Total intro length is roughly INTRO_DELAY + 2.6s. Lower it for a snappier entrance.
const INTRO_DELAY = 1.2;

const Preloader = () => {
  const [visible] = useState(() => !hasPlayed);
  const svgRef = useRef(null);
  const loadedRef = useRef(null);
  const preloaderRef = useRef(null);

  useEffect(() => {
    if (!visible) return undefined;
    hasPlayed = true;

    let tl;

    const handleLoad = () => {
      const startShape = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
      const endShape = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
      tl = gsap.timeline();

      // Text fade out animation
      tl.to(loadedRef.current, {
        delay: INTRO_DELAY,
        y: -50,
        opacity: 0,
        duration: 0.6,
      })

      // SVG morph animation
      .to(svgRef.current, {
        duration: 0.6,
        attr: { d: startShape },
        ease: "power1.easeIn",
      })
      .to(svgRef.current, {
        duration: 0.6,
        attr: { d: endShape },
        ease: "power1.easeOut",
      })

      // Preloader hide animation
      .to(preloaderRef.current, {
        y: -1000,
        duration: 0.8,
      })
      .to(preloaderRef.current, {
        zIndex: -1,
        display: "none",
      });
    };

    if (document.readyState === 'complete') {
      handleLoad();
      return () => { if (tl) tl.kill(); };
    }

    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
      if (tl) tl.kill();
    };
  }, [visible]);

  // Already played this session — never block navigation again.
  if (!visible) return null;

  return (
    <div className="preloader" ref={preloaderRef}>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path
          id="loader"
          ref={svgRef}
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        />
      </svg>

      <div className="loader-container">
        <div className="loaded" ref={loadedRef}>
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
