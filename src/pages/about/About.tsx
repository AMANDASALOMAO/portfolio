import React from 'react';
import styles from './About.module.scss';
import Section from '../../components/section/Section';
import memoji from './../../assets/memoji.png';
import { useScrollReveal } from '../../animations/useScroll';
import { motion } from 'framer-motion';



function About() {

const { ref, opacity, y } = useScrollReveal();

  return (

        <Section height={'60%'} flexDirection='row' className={styles.container}>
        <motion.img
        ref={ref}
        src={memoji}
        alt="memoji"
        className={styles.memoji}
        style={{ opacity, y }}
      />

      <motion.div
        className={styles.text}
        style={{ opacity, y }}
      >
          <h1>Sobre <span>mim</span></h1>
          <p>
           Desde agosto de 2025, atuo como Tutora de Python na Kodland, uma plataforma internacional de educação online, 
           onde ensino programação e lógica para crianças e adolescentes ao redor do mundo, desenvolvendo não apenas habilidades 
           técnicas, mas também raciocínio lógico e autonomia digital nos alunos.
          </p>
          <p>
           Sou Desenvolvedora de Software com experiência em sistemas de CRM, landing pages e projetos baseados em componentes (Storybook), 
           utilizando React, Next.js, Angular e Python em contextos profissionais na i-Value Tecnologia (kenlo.com.br) e na Kiitos. 
           Tenho experiência com HTML, CSS, JavaScript, TypeScript e Java, além de versionamento de código e desenvolvimento de testes unitários com Jest.
          </p>  
          <p>
           Possuo certificações em Java (Spring Boot, Java EE, Hibernate, POO), Desenvolvimento Web e Front-End com Angular, 
           e estou constantemente aprimorando minhas habilidades técnicas, com foco em desenvolvimento escalável, boas práticas e entrega de soluções eficientes.
          </p>
          </motion.div>
         
        </Section>
  );
}

export default About;
