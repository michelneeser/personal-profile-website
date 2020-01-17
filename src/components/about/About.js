import React from 'react';

import Section from '../section/Section';
import styles from './about.module.scss';

const About = () => {
  return (
    <div>
      <Section title="Nice to meet you!&nbsp;&nbsp;🎉">
        <div className={styles.content}>
          <p>I am <span className={styles.highlight}>passionate about software engineering</span> and computer stuff in general since I can remember. I love learning and exploring new things, especially in software and <span className={styles.highlight}>web development.</span> By day, I am a professional software developer <span className={styles.highlight}>for more than 10 years</span> now, currently employed in a web agency as technical lead. I work on Java web backends since 2014, but my interest has recently turned to full stack web development with all its glory and challenges. So by night, you can find me hacking away on the web. ⚡️🖥</p>
        </div>
      </Section>
    </div >
  )
}

export default About;