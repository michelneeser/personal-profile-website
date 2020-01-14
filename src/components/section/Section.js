import React from 'react';
import PropTypes from 'prop-types';

import styles from './section.module.scss';

const Section = ({ title, children }) => {
  return (
    <section className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default Section;