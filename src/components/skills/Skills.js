import React from 'react';

import Section from '../section/Section';
import styles from './skills.module.scss';

const Skills = () => {
  return (
    <div>
      <Section title="Skills / Frontend">
        <div className={styles.section}>
          <div className={styles.iconContainer}>
            <i className="devicon-css3-plain"></i>
            <div>CSS3</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-html5-plain"></i>
            <div>HTML5</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-javascript-plain"></i>
            <div>JavaScript</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-react-plain"></i>
            <div>React</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-sass-original"></i>
            <div>Sass</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-bootstrap-plain"></i>
            <div>Bootstrap</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-jquery-plain"></i>
            <div>jQuery</div>
          </div>
        </div>
      </Section>
      <Section title="Skills / Backend">
        <div className={styles.section}>
          <div className={styles.iconContainer}>
            <i className="devicon-nodejs-plain"></i>
            <div>Node.js</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-express-original"></i>
            <div>Express</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-mysql-plain"></i>
            <div>MySQL</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-mongodb-plain"></i>
            <div>MongoDB</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-java-plain"></i>
            <div>Java</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-tomcat-line"></i>
            <div>Tomcat</div>
          </div>
          {/* + Maven */}
        </div>
      </Section>
      <Section title="Skills / Tools">
        <div className={styles.section}>
          <div className={styles.iconContainer}>
            <i className="devicon-git-plain"></i>
            <div>Git</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-github-original"></i>
            <div>GitHub</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-heroku-original"></i>
            <div>Heroku</div>
          </div>
          <div className={styles.iconContainer}>
            <i className="devicon-confluence-plain"></i>
            <div>Confluence</div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Skills;