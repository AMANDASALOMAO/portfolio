import React from "react";
import styles from "./Home.module.scss";
import Section from "../../components/section/Section";
import { Avatar } from "../../components/avatar/Avatar";
import avatar from "./../../assets/avatar.png";
import SkillsList from "../../components/skillsList/skillsList";
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
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  /* =========================
     ANIMATION SYSTEM
  ========================== */

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: "blur(6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const textReveal: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(6px)",
      clipPath: "inset(0 0 100% 0)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      clipPath: "inset(0 0 0% 0)",
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Section height={"100vh"} className={styles.container}>
      <motion.div
        className={styles.info}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.4 }}
      >
      <motion.div variants={fadeUp} className={styles.right}>
                {/* Headline */}
        <motion.h1 variants={fadeUp}>
          Olá, eu sou Amanda
        </motion.h1>

        {/* Texto */}
        <motion.div>
          <motion.p variants={textReveal}>
            Transformo ideias em experiências digitais que funcionam,
            engajam e geram impacto.
          </motion.p>
        </motion.div>

        {/* Botões */}
        <motion.div variants={fadeUp} className={styles.button}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={styles.download}
            onClick={handleDownload}
          >
            Baixar CV
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={styles.contact}
            onClick={handleContact}
          >
            Entre em contato
          </motion.button>
        </motion.div>

      {/*  Skills 
        <motion.div variants={fadeUp}>
          <SkillsList />
        </motion.div>
      */}
      </motion.div>
      <motion.div className={styles.left} variants={fadeUp} >
        <OrbitAvatar />
      </motion.div>
      </motion.div>
    </Section>
  );
}

export default Home;
