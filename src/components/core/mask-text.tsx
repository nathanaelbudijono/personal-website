import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimationType {
  initial: { y: string };
  enter: {
    y: string;
    transition: { duration: number; ease: number[]; delay: number };
  };
}

interface MaskTextProps {
  children: React.ReactNode;
  delay?: number;
}

const MaskText = ({ children, delay = 0 }: MaskTextProps) => {
  const animation: {
    initial: AnimationType["initial"];
    enter: AnimationType["enter"];
  } = {
    initial: { y: "100%" },
    enter: {
      y: "0",
      transition: {
        duration: 0.95,
        ease: [0.33, 1, 0.68, 1],
        delay,
      },
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <main ref={ref}>
      <div className="overflow-hidden">
        <motion.div
          className="margin-0"
          variants={animation}
          initial="initial"
          animate={inView ? "enter" : ""}
        >
          {children}
        </motion.div>
      </div>
    </main>
  );
};

export default MaskText;