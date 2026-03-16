import { Variants } from "framer-motion";

export const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    clipPath: "inset(0 0 100% 0)",
  },
  show: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};