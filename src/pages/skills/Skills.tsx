import React from 'react';
import Section from '../../components/section/Section';
import css from './../../assets/css.png'
import java from './../../assets/java.png'
import html from './../../assets/html.png'
import js from './../../assets/js.png'
import ts from './../../assets/ts.png'
import sass from './../../assets/sass.png'
import styles from './Skills.module.scss'

function Services () {
  return (
    <Section height={'100%'} flexDirection={'column'}>
      <h1 style={{'color': '#72a117'}}>Skills</h1>
      <div className={styles.container}>
        <div className={styles.skills}>
        <img alt={'css'} src={css} height={'100px'}/>
        <h1>CSS</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
        <div className={styles.skills}>
        <img alt={'sass'} src={sass} height={'100px'}/>
        <h1>SASS</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
        <div className={styles.skills}>
        <img alt={'js'} src={js} height={'100px'}/>
        <h1>JAVASCRIPT</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
        
        <div className={styles.skills}>
        <img alt={'ts'} src={ts} height={'100px'}/>
        <h1>TYPESCRIPT</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
        <div className={styles.skills}>
        <img alt={'html'} src={html} height={'100px'}/>
        <h1>HTML</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
        <div className={styles.skills}>
        <img alt={'java'} src={java} height={'100px'}/>
        <h1>JAVA</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>      
      </div>
    </Section>
  );
}

export default Services;
