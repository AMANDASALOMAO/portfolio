import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export const item = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const Reveal = ({ children }: Props) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;