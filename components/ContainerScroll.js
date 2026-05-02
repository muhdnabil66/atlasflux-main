"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.02, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      className="h-[45rem] md:h-[55rem] flex items-center justify-center relative p-4 md:p-10"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-20 w-full relative"
        style={{ perspective: "1000px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({ translate, titleComponent }) => (
  <motion.div
    style={{ translateY: translate }}
    className="max-w-5xl mx-auto text-center mb-12 md:mb-16"
  >
    {titleComponent}
  </motion.div>
);

const Card = ({ rotate, scale, children }) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 30px rgba(0,0,0,0.5), 0 10px 25px -10px rgba(255,255,255,0.1)",
    }}
    className="max-w-5xl mx-auto h-[22rem] md:h-[28rem] w-full border border-gray-800 p-3 md:p-5 bg-gray-900 rounded-[30px]"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl bg-black md:rounded-2xl md:p-4">
      {children}
    </div>
  </motion.div>
);
