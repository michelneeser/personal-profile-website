import React from 'react';

import Section from '../section/Section';
import styles from './about.module.scss';

const About = () => {
  return (
    <div>
      <Section title="Nice to meet you! 🎉">
        <div className={styles.content}>
          <div>
            <p>Well, I didn't feel like writing an entire paragraph about me. But to avoid having only Lorem Ipsum here, a few key points about me follow:</p>
            <ul>
              <li>I am <span className={styles.highlight}>passionate about software engineering</span> and computer stuff in general since I can remember.</li>
              <li>I love learning new things, especially in software and <span className={styles.highlight}>web development.</span></li>
              <li>I am a <span className={styles.highlight}>professional software developer for more than 10 years,</span> currently employed in a web agency as technical lead.</li>
              <li>I work on Java web backends since 2014, but my interest has recently turned to <span className={styles.highlight}>full stack development</span> with all its glory and challenges.</li>
            </ul>
          </div>
        </div>
      </Section>
    </div >
  )
}

export default About;