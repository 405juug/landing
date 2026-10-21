import styles from './Hero.module.css';
import Image from 'next/image'

export default function Hero(){
    return(
        <section className={styles.hero}>
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>
                    <span className={styles.light}>Welcome to</span>
                    <span className={styles.bold}>Authentik</span>
                </h1>
                <p className={styles.lead}>
                    We help creative entrepreneurs build an honest brand &amp; digital platform.
                </p>
                <div className={styles.actions}>
                    <a href="#get-started" className={styles.cta}>
                        Start your journey
                    </a>
                    <a href="#journey" className={styles.link}>
                        Learn more →
                    </a>
                </div>
            </div>

            <Image
                src="/mountain.jpg"
                alt=""
                width={1800}
                height={640}
                priority
                className={styles.mountain}
            />
            <span className={styles.caption}>Snoqualmie Pass, WA-United States</span>
    </section>
    );
}