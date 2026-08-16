import React from 'react';
import styles from './Work.module.scss';
import Section from '../../components/section/Section';
import { Card } from '../../components/card/Card';
import ds from './../../assets/ds.png';
import gt from './../../assets/agenciamk.png';
import sistema from './../../assets/sistema.png';
import portfolio from './../../assets/portfolio.png';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../animations/useScroll';
import newsiq from './../../assets/newsiq.png';

function Work() {
  const { opacity, y } = useScrollReveal();

  const cards = [
    {
      link: 'https://github.com/AMANDASALOMAO/growth-tag',
      image: gt,
      title: 'Página de agência de marketing',
      description:
        'Serviços, portfólio e soluções estratégicas para ajudar empresas a promover sua marca e alcançar seu público-alvo de maneira eficaz e inovadora.',
    },
    {
      link: 'https://github.com/AMANDASALOMAO/storybook',
      image: ds,
      title: 'Design System',
      description:
        'Biblioteca interativa que documenta e exibe os componentes de forma organizada e acessível.',
    },
    {
      link: 'https://github.com/AMANDASALOMAO/portfolio',
      image: portfolio,
      title: 'Portfolio pessoal',
      description:
        'Plataforma desenvolvida para destacar projetos, competências e trajetória profissional, proporcionando uma experiência visual moderna e organizada.',
    },
    {
      link: 'https://github.com/AMANDASALOMAO/clientdata',
      image: sistema,
      title: 'Sistema de cadastro de usuários e roteadores',
      description:
        'Interface intuitiva e eficiente para o controle de clientes e roteadores, otimizando o processo e melhorando a organização dos dados.',
    },
    {
      link: 'https://github.com/AMANDASALOMAO/newsiq',
      image: newsiq,
      title: 'Plataforma inteligente de notícias',
      description:
        'Plataforma desenvolvida para centralizar, organizar e explorar notícias, utilizando inteligência artificial para gerar resumos, contexto e análises que facilitam o acesso e a compreensão das informações.',
    },
  ];

  return (
    <Section
      height={'100%'}
      flexDirection={'column'}
      className={styles.container}
    >
      <motion.div
        className={styles.text}
        style={{ opacity, y }}
      >
        <h1 style={{ color: '#72a117' }}>Meu trabalho</h1>

        <span>Veja projetos em destaque</span>

        <div className={styles.carousel}>

          {/* DESKTOP */}
          <motion.div
            className={`${styles.cards} ${styles.desktopCards}`}
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {cards.map((card, index) => (
              <Card
                key={`desktop-${index}`}
                link={card.link}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}

            {cards.map((card, index) => (
              <Card
                key={`desktop-copy-${index}`}
                link={card.link}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </motion.div>

          {/* MOBILE */}
          <div className={styles.mobileCards}>
            {cards.map((card, index) => (
              <Card
                key={`mobile-${index}`}
                link={card.link}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          <div className={styles.swipeIndicator}>
            Deslize para ver mais <span className={styles.arrow}>→</span>
          </div>

        </div>
      </motion.div>
    </Section>
  );
}

export default Work;