import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harry Barden</title>
        <meta name="description" content="Harry Barden personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Harry Barden</h1>
          <h2 className={styles.subtitle}>Software Engineer</h2>
          <div className={styles.linksContainer}>
            <a
              href="https://github.com/bardenha"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/harry-barden/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/hcbarden"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="mailto:bardenha@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
