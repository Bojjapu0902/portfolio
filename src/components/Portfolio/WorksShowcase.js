import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useWorks from '../../hooks/useWorks';

gsap.registerPlugin(ScrollTrigger);

/**
 * Full-bleed, pinned horizontal-scroll gallery between the "Selected Works"
 * heading and the filterable works grid — the vertical scroll drives the
 * track sideways through one image per project, then releases into the
 * grid below. Modelled on the "SHAPING bold FORM & feel" section on
 * nabilissa.com. Only runs on wide viewports with no reduced-motion
 * preference; smaller/reduced-motion viewports get a plain swipeable strip.
 */
const WorksShowcase = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const { works, loading, error } = useWorks();

  useEffect(() => {
    if (loading || error || works.length === 0) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
        const distance = () => track.scrollWidth - section.offsetWidth;

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => '+=' + distance(),
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger && tween.scrollTrigger.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    }, section);

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, [loading, error, works]);

  if (loading || error || works.length === 0) return null;

  return (
    <section className="works-showcase" ref={sectionRef}>
      <div className="works-showcase-track" ref={trackRef}>
        <div className="works-showcase-panel works-showcase-intro">
          <span className="works-showcase-eyebrow">Selected Works</span>
          <h2 className="works-showcase-title">
            Shaping bold
            <br />
            <em>interfaces</em> &amp; flow
          </h2>
          <p className="works-showcase-subtitle">
            Enterprise products, one pipeline — research through to
            production front-end.
          </p>
          <span className="works-showcase-hint">
            Scroll <i className="icon bi bi-arrow-right"></i>
          </span>
        </div>

        {works.map((work, index) => (
          <Link
            key={work.id}
            to={`/portfolio/${work.slug}`}
            className="works-showcase-panel works-showcase-item"
          >
            <img src={work.thumbnail} alt={work.title} />
            <div className="works-showcase-item-overlay">
              <span className="works-showcase-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="works-showcase-item-meta">
                <h3>{work.title}</h3>
                <p>{work.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WorksShowcase;
