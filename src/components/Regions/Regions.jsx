import React from 'react'
import { useLanguage } from '../LanguageChange';
import styles from './Regions.module.css'

export default function Regions() {
    const { language } = useLanguage();
    return (
        <>
            Regions
        </>
    )
}