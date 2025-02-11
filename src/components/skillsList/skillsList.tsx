import React from 'react';
import css from './../../assets/css.png'
import java from './../../assets/java.png'
import html from './../../assets/html.png'
import js from './../../assets/js.png'
import ts from './../../assets/ts.png'
import sass from './../../assets/sass.png'
import styles from './SkillsList.module.scss'

function SkillsList () {
  return (
    <div className={styles.container}>
        <div className={styles.skills}>
        <img alt={'css'} src={css} height={'20px'} width={'20px'}/>
        <p>CSS</p>
        </div>
        <div className={styles.skills}>
        <img alt={'sass'} src={sass} height={'20px'} width={'20px'}/>
        <p>SASS</p>
        </div>
        <div className={styles.skills}>
        <img alt={'js'} src={js} height={'20px'} width={'20px'}/>
        <p>JAVASCRIPT</p>
        </div>
        <div className={styles.skills}>
        <img alt={'ts'} src={ts} height={'20px'} width={'20px'}/>
        <p>TYPESCRIPT</p>
        </div>
        <div className={styles.skills}>
        <img alt={'html'} src={html} height={'20px'} width={'20px'}/>
        <p>HTML</p>
        </div>
        <div className={styles.skills}>
        <img alt={'java'} src={java} height={'20px'} width={'20px'}/>
        <p>JAVA</p>
        </div>      
    </div>
  );
}

export default SkillsList;
