import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                Developed by <a className={styles.link_portfolio} href='https://vm-developer.com.ar' target='_blank'>
                    <span className={styles.span_link_portfolio}>
                        Valentino Micheloni
                    </span>
                </a>
                <br />
                All Rights Reserved ®️
            </footer>
        </>
    )
}