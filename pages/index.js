import Head from 'next/head'
import { Navigation } from '../components/Navigation'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Example Site</title>
        <meta name="description" content="Hello World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        <h1 className={styles.title}>
          Hello World
        </h1>
      </main>
    </div>
  )
}
