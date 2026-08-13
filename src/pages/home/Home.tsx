import React from "react";
import styles from "./Home.module.scss";
import Section from "../../components/section/Section";
import { motion, Variants } from "framer-motion";
import OrbitAvatar from "../../components/orbitAvatar/OrbitAvatar";

function Home() {
  const handleDownload = () => {
    window.open("/portfolio/cv/curriculo.pdf", "_blank");
  };

  const handleContact = () => {
    const phoneNumber = "+5575981264552";

    const message = encodeURIComponent(
      "Olá Amanda, gostaria de saber mais!"
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  };

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Section
      height="100vh"
      className={styles.container}
    >
      <div className={styles.overlay} />

      <motion.div
        className={styles.info}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* =========================
            TEXTO
        ========================== */}

        <div className={styles.right}>
          <motion.div
            className={styles.textContent}
            variants={fadeUp}
          >
            <motion.span
              className={styles.eyebrow}
              variants={fadeUp}
            >
              DESENVOLVEDORA FRONT-END
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Olá, eu sou{" "}
              <span>Amanda</span>
            </motion.h1>

            <motion.p variants={fadeUp}>
              Transformo ideias em experiências digitais que
              funcionam, engajam e geram impacto.
            </motion.p>

            <motion.div
              className={styles.button}
              variants={fadeUp}
            >
              <motion.button
                className={styles.download}
                onClick={handleDownload}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                Baixar CV
              </motion.button>

              <motion.button
                className={styles.contact}
                onClick={handleContact}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                Entre em contato
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================
            AVATAR
        ========================== */}

        <motion.div
          className={styles.left}
          variants={fadeUp}
        >
          <OrbitAvatar />
        </motion.div>
      </motion.div>

      {/* =========================
          SCROLL INDICATOR
      ========================== */}

      <motion.div
        className={styles.scrollIndicator}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
      >
        <div className={styles.mouse}>
          <motion.div
            className={styles.wheel}
            animate={{
              y: [0, 7, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </Section>
  );
}

export default Home;