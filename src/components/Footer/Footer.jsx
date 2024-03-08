import React from 'react';
import { useLanguage } from '../LanguageChange';
import styles from './Footer.module.css'

export default function Footer() {
    const { language } = useLanguage();
    return (
        <>
            <footer className={styles.footer}>
                {language === 'español' ? 'Desarrollado por ' : 'Developed by '}<a className={styles.link_portfolio} href='https://valemiche.com.ar' target='_blank'>
                    <span className={styles.span_link_portfolio}>
                        Valentino Micheloni
                    </span>
                </a>
                <br />
                {language === 'español' ? 'Todos los derechos reservados 2024®️' : 'All rights reserved 2024®️'}
            </footer>
        </>
    )
}
