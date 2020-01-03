import React from "react";

import styles from './index.module.scss';
import Layout from "../components/layout/layout";

const IndexPage = () => (
  <Layout>
    <div className={styles.titleWrapper}>
      <div className={styles.image}></div>
      <h1 className={styles.title}>Michel Neeser</h1>
      <h2 className={styles.subtitle}>Full Stack Software Developer</h2>
    </div>
  </Layout >
)

export default IndexPage;