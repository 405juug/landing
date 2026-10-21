import Image from 'next/image';
import styles from './Footer.module.css';

const colums = [
    { title: 'About', links: ['Start Here', 'Our Blog', 'Podcast', 'Newsletter'] },
    { title: 'Services', links: ['Consulting', 'Social Media', 'Web Design', 'Get in touch'] },
    { title: 'Resources', links: ['Themes', 'Web Fonts', 'Tutorials', 'Daily Reads'] },
    { title: 'Connect', links: ['Facebook', 'Instagram', 'Twitter', 'GitHub'] },
];

export default function Footer() {
    return(
        <footer className={`container ${styles.footer}`}>
            <div className={styles.brand}>
                <Image src="/logo.svg" alt='Authentik' width={40} height={40} />
                <p className={styles.tagline}>Create honestly.</p>
            </div>

            <div className={styles.main}>
                <p className={styles.believe}>We believe</p>
                <blockquote className={styles.quote}>
                    “The key to building an authentic business is building an authentic life.” — Brian Gardner
                </blockquote>

                <div className={styles.columns}>
                    {colums.map((col) => (
                        <nav key={col.title} aria-label={col.title}>
                            <h4>{col.title}</h4>
                            <ul>
                                {col.links.map((l) => (
                                    <li key={l}>
                                        <a href='#'>{l}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
            </div>

            <p className={styles.copy}>© 2026 · All rights reserved</p>
            <div className={styles.legal}>
                <a href='#'>Terms of Service</a>
                <a href='#'>Privacy Policy</a>
            </div>
        </footer>
    );
}