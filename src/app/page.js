import Image from "next/image";
import styles from "./page.module.css";
import xlogo from '../../public/x.png'
import icplogo from '../../public/icp.png'
import suilogo from '../../public/sui.png'
import gitlogo from '../../public/github.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          Andres Mateo
        </h1>
        <h3>
          Smart Contract Developer
        </h3>
      </div>

      <div className={styles.content}>
        <h2 className={styles.li}>Work experience:</h2>
        <ul className={styles.ul} >
          <div className={styles.textlogo}>
          <h2>Sui</h2>
                  <Image
              src={suilogo}
              alt="Sui Logo"
              className={styles.innerlogo}
            />
          </div>

          <li className={styles.li} >IN PROGRESS: Competing in the Walrus Devnet Hackathon: Breaking the Ice!</li>


          <div className={styles.textlogo}>
          <h3>Internet Computer</h3>
                  <Image
              src={icplogo}
              alt="Icp Logo"
              className={styles.innerlogo}
            />
          </div>
          <li className={styles.li}>One of the first Motoko full stack developers in the ecosystem</li>
          <li className={styles.li}>Previous Motoko Developer in Finny, a crypto lending protocol that raised over 1.5M from investors including Polychain Capital</li>
          <li className={styles.li}>Collaborated and Helped in the Motoko Bootcamp initiative 2023</li>

        </ul>

        <h2 className={styles.li}>About me:</h2>
        <p className={styles.li}>22 year old developer, currently focusing on Bitcoin and Sui, interested in decentralization, DeFi and Cryptography. In love with nature and internet culture.</p>
        <h2 className={styles.li}>Skills:</h2>
        <p className={styles.li}>Python, Move, Motoko, Rust, C# - React, Svelte</p>

        <h2 className={styles.li}>Feel free to reach out or check any of my projects down below 👇</h2>
      </div>
      <div className={styles.socials}>
      <a href="https://github.com/torates" target="_blank">
        <Image
              src={gitlogo}
              alt="Github  Logo"
              className={styles.logo}
            />
      </a>
      <a href="https://x.com/woolycrypto" target="_blank">
        <Image
              src={xlogo}
              alt="X Logo"
              className={styles.logo}
            />
      </a>
      </div>

    </main>
  );
}
