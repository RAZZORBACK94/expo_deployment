"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import ScrollParallax from "../../components/ScrollParallax";
import HorizontalScroll from "../../components/HorizontalScroll";
import Intro from "../../components/Hero/Intro";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
        <Intro />
        <ScrollParallax />
        <HorizontalScroll />
    </div>
  );
}
