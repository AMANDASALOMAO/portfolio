import { motion } from "framer-motion";
import styles from "./OrbitAvatar.module.scss";
import avatar from "../../assets/avatar.png";
import { useEffect, useState } from "react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import java from "../../assets/java.png";
import sass from "../../assets/sass.png";
import ts from "../../assets/ts.png";

const skills = [
  html,
  css,
  js,
  java,
  sass,
  ts,
];

const radius = 200;

export default function OrbitAvatar() {
    const [radius, setRadius] = useState(240);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setRadius(180);
      } else {
        setRadius(240);
      }
    };

    handleResize(); // executa ao carregar

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.glow} />

      <motion.img
        src={avatar}
        alt="Avatar"
        className={styles.avatar}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={styles.orbit}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {skills.map((icon, index) => {
          const angle = (360 / skills.length) * index;

          return (
            <div
              key={index}
              className={styles.icon}
              style={{
                transform: `rotate(${angle}deg) translateY(-${radius}px)`,
              }}
            >
              <motion.img
                src={icon}
                alt=""
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 28,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}