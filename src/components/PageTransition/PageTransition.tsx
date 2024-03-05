// components/PageTransition.tsx
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    style={{
      width: "100dvw",
      height: "100dvh",
      background: "#fff",
    }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
