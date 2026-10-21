import Image from 'next/image'
import styles from './Framework.module.css'

const items = [
    {
        title: 'Authentik Living',
        text: 'We believe that living an honest and intentional life will carry over to the way you run your business.'
    },
        {
        title: 'Authentik Design',
        text: 'We believe that amazing typography and white space will help you build a beautiful website experience.'
    },
        {
        title: 'Authentik Business',
        text: 'We believe that being genuine and transparent with your audience is paramount to a successful business.'
    },
        {
        title: 'Authentik Community',
        text: 'We believe that doing life together—both business and personal—is the only way to go about this journey.'
    },
];

export default function Framework() {
    return(
        <section id="get-started" className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div>
                    <h2 className={styles.title}>Get started today.</h2>
                    <p className={styles.lead}>
                        Introducing the Authentik Framework™ for creative entrepreneurs.
                    </p>

                    <div className={styles.grid}>
                        {items.map((item) => (
                            <article key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div> 

                <form className={styles.card}>
                    <Image src="/logo.svg" alt="Authentik" width={56} height={56} />
                    <h3>Start your journey.</h3>
                    <p className={styles.cardText}>
                        We help creative entrepreneurs build an honest brand &amp; digital platform.
                    </p>
                    <input type='text' name='name' placeholder='First Name' aria-label='First name' />
                    <input type='email' name='email' placeholder='Email Address' aria-label='Email address' />
                    <label className={styles.check}>
                        <input type='checkbox' defaultChecked />
                        <span>
                            I accept the <a href="#">terms of service</a> and <a href="#">privacy policy</a>.
                        </span>
                    </label>
                    <button type='button' className={styles.submit}>
                        Get started today
                    </button>
                </form>
            </div>
        </section>
    );
}