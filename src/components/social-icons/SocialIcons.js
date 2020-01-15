import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import styles from './socialicons.module.scss';

const SocialIcons = () => {
  return (
    <div>
      <a href="https://github.com/michelneeser" target="_blank">
        <FontAwesomeIcon
          icon={faGithubSquare}
          className={styles.icon} />
      </a>
      <a href="https://linkedin.com/in/michelneeser" target="_blank">
        <FontAwesomeIcon
          icon={faLinkedin}
          className={styles.icon} />
      </a>
      <a href="https://twitter.com/michelneeser" target="_blank">
        <FontAwesomeIcon
          icon={faTwitterSquare}
          className={styles.icon} />
      </a>
    </div>
  )
}

export default SocialIcons;