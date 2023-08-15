import { motion, AnimatePresence, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
type FrammerProps = {
  children: ReactNode;
  delay?: number;
};

export const Framer: React.FC<FrammerProps> = ({ children, delay = 0.3 }) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100, filter: "blur(1px)" }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 100,
            filter: "blur(0px)",
          }}
          transition={{ delay: delay, duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
