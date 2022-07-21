import Head from "next/head";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lukas Brits</title>
        <meta
          name="Lukas Brits Portfolio"
          content="Developer, designer, reader, plant parent."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <p className={utilStyles.headingLg}>Hi, my name is</p>
        <h1 className={styles.title}>Lukas Brits</h1>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
