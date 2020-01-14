import React from 'react';

import Sections from '../components/sections/Sections';

import styles from './index.module.scss';
import portraitImage from '../images/portrait.jpg';

const IndexPage = () => (
  <div>
    <div className={styles.box}>
      <img className={styles.portrait} src={portraitImage} />
      <h1>Michel Neeser</h1>
      <h2>Full Stack Software Developer</h2>
      <Sections />
    </div>
  </div >
);

export default IndexPage;