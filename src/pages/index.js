import React from 'react';

import styles from './index.module.scss';
import portraitImage from '../images/portrait.jpg';

const IndexPage = () => (
  <div>
    <div className={styles.box}>
      <img className={styles.portrait} src={portraitImage} />
      <h1>Michel Neeser</h1>
      <h2>Full Stack Software Developer</h2>
      <div className={styles.contentBox}>
        <h3>Skills</h3>
      </div>
      <div className={styles.contentBox}>
        <h3>Projects</h3>
      </div>
      <div className={styles.contentBox}>
        <h3>Contact</h3>
      </div>
    </div>
  </div >
);

export default IndexPage;