import React from 'react';
import styles from './Services.module.scss'
import Section from '../../components/section/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faPalette, faWrench } from '@fortawesome/free-solid-svg-icons';

function Services () {
  return (
    <Section height={'100%'} flexDirection={'column'} className={styles.container}>
      <h1 style={{'color': '#72a117'}}>Serviços</h1>
      <span>Como posso ajudar o seu negócio</span>
      <div className={styles.description}>
      <div>
        <FontAwesomeIcon icon={faLaptopCode} color=" #4b4b4b" size='2xl' />
        <span>Desenvolvimento Front End responsivo</span>
     {/*<p>
      Minha especialidade é criar interfaces intuitivas e funcionais utilizando 
      tecnologias modernas como React, Next.js e Angular. Com um foco em design responsivo, 
      desenvolvo experiências web otimizadas para diferentes dispositivos, garantindo 
      a melhor usabilidade e performance. Minha experiência inclui a criação de landing pages, 
      storybooks e aplicações completas para empresas.
      </p>*/}
      </div>
      <div>
        <FontAwesomeIcon icon={faWrench} color="#4b4b4b" size='2xl' />
        <span>Manutenções e Suporte Técnico</span>
      {/*<p>
      Tenho ampla experiência em manter e otimizar aplicações existentes, 
      atuando na correção de bugs, implementação de melhorias e suporte técnico 
      ágil para demandas específicas. Utilizo ferramentas como Jest para garantir 
      a qualidade do código e frameworks de desenvolvimento como Spring Boot e Hibernate 
      para integrações robustas. Meu objetivo é entregar soluções estáveis e 
      alinhadas às necessidades do cliente.
      </p>*/}
      </div>
      <div>
        <FontAwesomeIcon icon={faPalette} color="#4b4b4b" size='2xl' />
        <span>Desenvolvimento de Design Systems</span>
      {/*<p>
          A criação de design systems é parte fundamental do meu trabalho,
          unindo consistência visual e componentes reutilizáveis. 
            Com ferramentas como Storybook, React e TypeScript, desenvolvo 
          bibliotecas que facilitam a escalabilidade e a colaboração entre equipes. 
          Esses sistemas ajudam a padronizar a experiência do usuário e a otimizar 
          o processo de desenvolvimento em projetos de alta complexidade.
          </p>*/}
      </div>
      </div>
    </Section>
  );
}

export default Services;
