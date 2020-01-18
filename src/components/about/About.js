import React from 'react';

import Section from '../section/Section';
import styles from './about.module.scss';

const About = () => {
  return (
    <div>
      <Section title="Nice to meet you!&nbsp;&nbsp;🎉">
        <div className={styles.content}>
          <p>I am <span className={styles.highlight}>passionate about software engineering</span> and all things information technology since I can remember. I love learning and exploring new things, especially in <span className={styles.highlight}>web development.</span> By day, I am working in software development <span className={styles.highlight}>for more than 10 years</span> now, currently as a technical lead in a web agency. I am involved in Java web backends since 2014, but my interest has recently turned to full stack web development with all its glory and challenges. So by night, you probably find me hacking away on web stuff. ⚡️🖥</p>
        </div>
      </Section>
    </div >
  )
}

export default About;