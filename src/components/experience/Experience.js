import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMapPin } from '@fortawesome/free-solid-svg-icons';

import Section from '../section/Section';
import styles from './experience.module.scss';

const Experience = () => {
  return (
    <div>
      <Section title="Professional Experience">
        <div className={styles.jobs}>
          <div className={styles.job}>
            <div className={styles.title}>
              <div>
                <span>Technical Lead @ MySign AG</span>
                <span>
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className={styles.icon} />
                </span>
              </div>
            </div>
            <div className={styles.accountabilities}>
              <ul>
                <li>Leading the technical development and planning of flagship web projects.</li>
                <li>Conception of data exchange interfaces to third party systems of customers.</li>
                <li>Responsible the vocational training of software developer trainees.</li>
              </ul>
            </div>
            <div className={styles.date}>
              <span>⏰ October 2018 &ndash; today</span>
              <span>|</span>
              <span>📍 Olten, Switzerland</span>
            </div>
          </div>

          <div className={styles.job}>
            <div className={styles.title}>
              <div>
                <span>Java Developer @ MySign AG</span>
                <span>
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className={styles.icon} />
                </span>
              </div>
            </div>
            <div className={styles.accountabilities}>
              <ul>
                <li>Technical conception and development of MySign products and customer projects.</li>
                <li>Principal software developer of some of the flagship web projects of MySign.</li>
                <li>Vocational training of software developer trainees.</li>
              </ul>
            </div>
            <div className={styles.date}>
              <span>⏰ April 2014 &ndash; October 2018</span>
              <span>|</span>
              <span>📍 Olten, Switzerland</span>
            </div>
          </div>

          <div className={styles.job}>
            <div className={styles.title}>
              <div>
                <span>Java Software Engineer @ Finnova AG</span>
                <span>
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className={styles.icon} />
                </span>
              </div>
            </div>
            <div className={styles.accountabilities}>
              <ul>
                <li>Development of core functionalities.</li>
                <li>Redesign of the central operating component for processing bank orders.</li>
                <li>Maintenance for central basic components in the core system and UI framework.</li>
                <li>Framework support for software developers.</li>
              </ul>
            </div>
            <div className={styles.date}>
              <span>⏰ August 2013 &ndash; April 2014</span>
              <span>|</span>
              <span>📍 Lenzburg, Switzerland</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Experience;