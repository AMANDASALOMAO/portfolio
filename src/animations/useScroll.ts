import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useScrollReveal() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return { ref, opacity, y };
}