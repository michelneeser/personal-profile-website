import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import Section from '../section/Section';
import styles from './experience.module.scss';

const Experience = () => {
  return (
    <div>
      <Section title="Professional Experience">
        <div className={styles.jobs}>
          <div className={styles.title}>
            <div>
              <span>Technical Lead @ MySign AG</span>
              <FontAwesomeIcon
                icon={faLaptopCode}
                className={styles.icon} />
            </div>
          </div>
          <div className={styles.accountabilities}>
            <ul>
              <li>Some stuff</li>
              <li>Some other stuff</li>
              <li>Some random stuff</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Experience;