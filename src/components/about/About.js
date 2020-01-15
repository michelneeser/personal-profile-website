import React from 'react';

import Section from '../section/Section';
import styles from './about.module.scss';

const About = () => {
  return (
    <div>
      <Section title="Nice to meet you! 🎉">
        <div className={styles.content}>
          <p>Well, I didn't feel like writing an entire paragraph about me. But to avoid having only Lorem Ipsum here, a few key points about me follow:</p>
          <ul>
            <li>I am passionate about computer stuff and software development since I can remember.</li>
            <li>I love learning new things, especially in web development.</li>
            <li>I am a professional Java developer and technical lead, currently employed in a web agency.</li>
            <li>I work on web backends since 2014 ...</li>
            <li>... but my interest has recently turned to full stack development with all its glory and challenges.</li>
          </ul>
        </div>
      </Section>
    </div >
  )
}

export default About;