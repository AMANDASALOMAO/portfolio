import React from 'react';
import styles from './Menu.module.scss';

const Menu: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.links}>
        <li><button onClick={() => handleScroll('home')}>Início</button></li>
        <li><button onClick={() => handleScroll('about')}>Sobre mim</button></li>
        <li><button onClick={() => handleScroll('work')}>Projetos</button></li>
        <li><button onClick={() => handleScroll('services')}>Serviços</button></li>
        {/*<li><button onClick={() => handleScroll('skills')}>Skills</button></li>*/}
        <li><button onClick={() => handleScroll('contact')}>Contato</button></li>
      </ul>
    </nav>
  );
};

export default Menu;
