import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll: React.FC = () => {
  // Define refs with types
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure the refs are not null before applying animation
    if (sectionRef.current && triggerRef.current) {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );

      // Return a cleanup function to kill the animation on component unmount
      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* Wrapper to prevent errors on route change */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
