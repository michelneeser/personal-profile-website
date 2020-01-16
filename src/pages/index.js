import React from 'react';

import SocialIcons from '../components/social-icons/SocialIcons';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Skills from '../components/skills/Skills';

import styles from './index.module.scss';
import portraitImage from '../images/portrait.jpg';

const IndexPage = () => (
  <div>
    <div className={styles.box}>
      <img className={styles.portrait} src={portraitImage} />
      <div className={styles.title}>
        <h1>Michel Neeser</h1>
        <h2>Software Developer</h2>
      </div>
      <SocialIcons />
      <About />
      <Experience />
      <Skills />
    </div>
  </div>
);

export default IndexPage;