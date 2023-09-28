import React from 'react'
import styles from './SearchBar.module.css'
import { useLanguage } from '../LanguageChange'
import { orderByName } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

export default function SearchBar() {
    const { language } = useLanguage()
    const dispatch = useDispatch() // Conectamos el dispatch de Redux
    const allCharacters = useSelector((state) => state.characters) // Con useSelector hago q me traiga todos los VGs guardados
    function handleSort(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrder(e.target.value);
    };
    return (
        <div className={styles.searchbar}>
            <input
                className={styles.searchbar_input}
                type="search"
                maxLength={20}
                placeholder={language === 'español' ? 'Buscar...' : 'Search...'}
                pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+"
            />
            <div className={styles.orden}>
                <select className={styles.select} onChange={(e) => handleSort(e)}>
                    <option value="Default" hidden>
                        {language === 'español' ? 'ORDENAR POR' : 'SORT BY'}
                    </option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>
        </div>
    )
}

