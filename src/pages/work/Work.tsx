import React from 'react';
import styles from './Work.module.scss'
import Section from '../../components/section/Section';
import { Card } from '../../components/card/Card';
import ds from './../../assets/ds.png';
import gt from './../../assets/agenciamk.png';
import sistema from './../../assets/sistema.png';

function Contact () {

  return (
    <Section height={'70%'} flexDirection={'column'} className={styles.container}>
    <h3>Meu trabalho</h3>
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
    </Section>
  );
}

export default Contact;
