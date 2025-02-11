import React from 'react';
import styles from './About.module.scss';
import Section from '../../components/section/Section';
import memoji from './../../assets/memoji.png';

function About() {
  return (
        <Section height={'60%'} flexDirection='row' className={styles.container}>
            <img src={memoji} alt={'memoji'} className={styles.memoji} />
          <div className={styles.text}>
          <h1>Sobre <span>mim</span></h1>
          <p>
            Sou estudante de Engenharia de Software e me interesso por tudo 
            que envolve tecnologia e desenvolvimento. Durante essa jornada, mergulhei 
            em várias linguagens e frameworks, como HTML, CSS, JavaScript, TypeScript 
            e Java. Tive a oportunidade de trabalhar com React, Next e Angular, criando 
            aplicações web que são tanto funcionais quanto atrativas. As minhas habilidades 
            em versionamento de código e testes com Jest foram aprimoradas em experiências 
            profissionais, o que me ajuda a garantir a qualidade e a eficiência dos meus projetos.
            <br />
            Além da experiência prática, busquei aprofundar meu conhecimento por meio de cursos.
            Concluí um curso de Java, um de desenvolvimento frontend com Angular e outro 
            de desenvolvimento web, totalizando mais de 230 horas de aprendizado.
          </p>
          </div>
         
        </Section>
  );
}

export default About;
