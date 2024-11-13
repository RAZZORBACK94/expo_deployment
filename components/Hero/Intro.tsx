import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import './Intro.scss';

const Intro: React.FC = () => {
  const container = useRef<HTMLDivElement>(null); 

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh']);

  return (
    <div className="container h-screen overflow-hidden" ref={container}>
      <motion.div style={{ y }} className="parallax-background" />
      <div className="content">
        <h1>Selamat Datang di Halaman Parallax</h1>
        <p>Ini adalah efek parallax sederhana dengan gambar latar belakang.</p>
      </div>
    </div>
  );
};

export default Intro;
