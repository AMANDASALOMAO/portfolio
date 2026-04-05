import React from 'react';
import styles from './Work.module.scss'
import Section from '../../components/section/Section';
import { Card } from '../../components/card/Card';
import ds from './../../assets/ds.png';
import gt from './../../assets/agenciamk.png';
import sistema from './../../assets/sistema.png';

import Reveal from '../../components/reveal/Reveal';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../animations/useScroll';

function Work () {
const { ref, opacity, y } = useScrollReveal();
  return (
    
    <Section height={'100%'} flexDirection={'column'} className={styles.container}>
      <motion.div
        className={styles.text}
        style={{ opacity, y }}
      >
    <h1  style={{'color': '#72a117'}}>Meu trabalho</h1>
    <span>Veja projetos em destaque</span>
    <div className={styles.cards}>
      <Card
        link={'https://github.com/AMANDASALOMAO/growth-tag'}
        image={gt}
        title="Página de agência de marketing"
        description="Serviços, portfólio e soluções estratégicas para ajudar empresas a promover sua marca e alcançar seu público-alvo de maneira eficaz e inovadora."
      /><Card 
      link={'https://github.com/AMANDASALOMAO/storybook'}
      image={ds}
      title="Design System"
      description="Biblioteca interativa que documenta e exibe os componentes de forma organizada e acessível."
    /><Card 
    link={'https://github.com/AMANDASALOMAO/clientdata'}
    image={sistema}
    title="Sistema de cadastro de usuários e roteadores"
    description="Interface intuitiva e eficiente para o controle de clientes e roteadores, otimizando o processo e melhorando a organização dos dados."
  />
    </div>
    </motion.div>
    </Section>
   
  );
}

export default Work;
