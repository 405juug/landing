import Image from 'next/image';
import styles from './Header.module.css'

const links = ['Start Here', 'Our Blog', 'Podcast', 'Newsletter'];

export default function Header() {
    return(
        <header className={`container ${styles.header}`}>
            <a href='#' aria-label="Authentik - home">
                <Image src='/logo.svg' alt='Authentik' width={40} height={40} />
            </a>
            <nav className={styles.nav} aria-label='Main'>
                {links.map((l) => (
                    <a key={l} href='#'>
                        {l}
                    </a>
                ))}
                <a href="#get-started" className={styles.active}>
                    Get in touch
                </a>
            </nav>
        </header>
    )
}