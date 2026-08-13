import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import styles from "./OrbitAvatar.module.scss";

import avatar from "../../assets/avatar.png";
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

export default function OrbitAvatar() {
  const [radius, setRadius] = useState(220);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setRadius(150);
      } else if (window.innerWidth <= 1000) {
        setRadius(180);
      } else {
        setRadius(220);
      }
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return (
    <div className={styles.container}>

      {/* Glow */}

      <div className={styles.glow} />

      {/* Avatar */}

      <motion.img
        src={avatar}
        alt="Amanda"
        className={styles.avatar}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Órbita */}

      <motion.div
        className={styles.orbit}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {skills.map((icon, index) => {
          const angle =
            (360 / skills.length) * index;

          return (
            <div
              key={index}
              className={styles.icon}
              style={{
                transform: `
                  rotate(${angle}deg)
                  translateY(-${radius}px)
                `,
              }}
            >
              <img
                src={icon}
                alt=""
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}