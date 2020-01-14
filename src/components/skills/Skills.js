import React from 'react';

import Section from '../section/Section';
import styles from './skills.module.scss';

const Skills = () => {
  return (
    <div>
      <Section title="Skills / Frontend">
        <div className={styles.section}>
          <div className={styles.iconContainer}>
            <i class="devicon-css3-plain"></i>
            <div>CSS3</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-html5-plain"></i>
            <div>HTML5</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-javascript-plain"></i>
            <div>JavaScript</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-react-plain"></i>
            <div>React</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-sass-original"></i>
            <div>Sass</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-bootstrap-plain"></i>
            <div>Bootstrap</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-jquery-plain"></i>
            <div>jQuery</div>
          </div>
        </div>
      </Section>
      <Section title="Skills / Backend">
        <div className={styles.section}>
          <div className={styles.iconContainer}>
            <i class="devicon-nodejs-plain"></i>
            <div>Node.js</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-express-original"></i>
            <div>Express</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-mysql-plain"></i>
            <div>MySQL</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-mongodb-plain"></i>
            <div>MongoDB</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-java-plain"></i>
            <div>Java</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-tomcat-line"></i>
            <div>Tomcat</div>
          </div>
        </div>
      </Section>
      <Section title="Skills / Tools">
        <div className={styles.section}>
          <div className={styles.iconContainer}>
            <i class="devicon-git-plain"></i>
            <div>Git</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-github-original"></i>
            <div>GitHub</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-heroku-original"></i>
            <div>Heroku</div>
          </div>
          <div className={styles.iconContainer}>
            <i class="devicon-confluence-plain"></i>
            <div>Confluence</div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Skills;