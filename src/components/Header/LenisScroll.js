import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // Expose the instance so route changes can reset scroll position
    window.lenis = lenis;

    // Update ScrollTrigger on each scroll event
    lenis.on('scroll', () => ScrollTrigger.update());

    // Raf loop for smooth scroll
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);

    // Disable lag smoothing to keep smooth animations
    gsap.ticker.lagSmoothing(0);

    // Cleanup the effect when the component unmounts
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      if (window.lenis === lenis) delete window.lenis;
    };
  }, []);

  return null;
};

export default LenisScroll;
