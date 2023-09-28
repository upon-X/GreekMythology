import React from 'react'
import { useLanguage } from '../LanguageChange';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Characters.module.css'

export default function Characters() {
    const { language } = useLanguage();
    return (
        <div className={styles.container_charac}>
            <div className={styles.characters}>
                <h1 className={styles.title_charac}>
                    {language === 'español' ?
                        'Personajes Históricos' :
                        'Historical Characters'
                    }
                </h1>
                <SearchBar />
            </div>
        </div>
    )
}