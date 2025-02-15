import React from 'react';
import styles from './Home.module.scss';
import Section from '../../components/section/Section';
import { Avatar } from '../../components/avatar/Avatar';
import profile from './../../assets/profile.svg';
import SkillsList from '../../components/skillsList/skillsList';

function Home() {
  const handleDownload = () => {
    const url = 'portfolio/cv/curriculo.pdf';
    window.open(url, '_blank');
  }

  const handleContact = () => {
    const phoneNumber = '+5575981264552';
    const message = encodeURIComponent('Olá Amanda, gostaria de saber mais!');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section height={'100vh'} className={styles.container}>
      <div className={styles.info}>
        <Avatar src={profile} alt="profile" isRound withBorder />
        <p>Olá, meu nome é <span>AMANDA ANDRADE ARGÔLO</span> e sou</p>
        <h1>Desenvolvedora Front-End</h1>
        <p style={{ fontSize: '0.8rem', color: '#ffffff63' }}>
          Transformo necessidades em aplicações reais, envolventes e funcionais.
        </p>
        <div className={styles.button}>
          <button
            className={styles.download}
            onClick={handleDownload}
          >
            <span>Baixar CV</span>
          </button>
          <button
            className={styles.contact}
            onClick={handleContact}
          >
            <span>Entre em contato</span>
          </button>
        </div>
        <SkillsList />
      </div>
    </Section>
  );
}

export default Home;
