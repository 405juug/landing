import Image from 'next/image'
import styles from './Features.module.css'

const items = [
    {
        icon: '/icons/trees.svg',
        title: 'Be inspired.',
        text: 'We want to give you the help and support you need to make huge strides towards the vision you’re after in your business.',
    },
    {
        icon: '/icons/signpost.svg',
        title: 'Get connected.',
        text: 'Jam with fellow tribe members, share experiences, stay accountable, and encourage one another on your journey.',
    },
    {
        icon: '/icons/backpack.svg',
        title: 'Be inspired.',
        text: 'Discover the tools and resources you need to build a beautiful website and create an amazing brand and digital platform.',
    },
];

export default function Features() {
    return(
        <section id="journey" className={`container ${styles.sections}`}>
            <h2 className={styles.title}>Start your journey.</h2>
            <p className={styles.lead}>
                Come as you are. Bring your talents, your brilliance, your frustrations, your
                struggles—and let’s turn them into something awesome.
            </p>

            <div className={styles.grid}>
                {items.map((item) => (
                    <article key={item.title} className={styles.item}>
                        <div className={styles.icon}>
                            <Image src={item.icon} alt="" width={48} height={48} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </article>
                ))}
            </div>

            <a href="#get-started" className={styles.link}>
                Take the first step today →
            </a>
        </section>
    );
}