import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setCharacters } from "../../redux/actions"; // Asegúrate de importar la acción
import charjson from '../../../greekcharacters.json'
import { useLanguage } from '../LanguageChange';
import styles from './Character.module.css'

export default function Character() {
    const greekcharacters = useSelector((state) => state.greekcharacters);
    const dispatch = useDispatch();
    const { language } = useLanguage();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    useEffect(() => {
        const jsonData = charjson
        dispatch(setCharacters(jsonData.greekcharacters));
    }, [dispatch]);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCharacters = greekcharacters.slice(indexOfFirstItem, indexOfLastItem);
    // Maneja el cambio de página
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <>
            <div className={styles.character}>
                {greekcharacters.map((character, index) => (
                    <div className={styles.character_card} key={index}>
                        <img className={styles.character_img} src={character.imagen} alt='imagen del personaje' />
                        <h2 className={styles.character_nombre}>{language === 'español' ? character.nombreEs : character.nombreEn}</h2>
                        <p className={styles.character_especie}>{language === 'español' ? character.especieEs : character.especieEn}</p>
                        <p className={styles.character_reconocimiento}>{language === 'español' ? character.reconocimientoEs.join(", ") : character.reconocimientoEn.join(", ")}</p>
                        {/*<p>{language === "español" ? "Familia" : "Family"}:</p>
                        <ul>
                        <li>{language === "español" ? "Padre" : "Father"}:
                                {
                                    character.familia.padre ?
                                        character.familia.padre
                                        : language === 'español' ?
                                            ' No se especifica'
                                            : ' Not specified'
                                }
                            </li>
                            <li>{language === "español" ? "Madre" : "Mother"}:
                                {
                                    character.familia.madre ?
                                    character.familia.madre
                                        : language === 'español' ?
                                            ' No se especifica'
                                            : ' Not specified'
                                        }
                            </li>
                            <li>{language === "español" ? "Hermanos" : "Siblings"}: {character.familia.hermanos.join(", ")}</li>
                        </ul> */}
                        {/* <p>{language === "español" ? "Descripción" : "Description"}: {character.descripcion}</p> */}
                    </div>
                ))}
            </div>
            {greekcharacters.length > itemsPerPage && (
                <div className={styles.pagination}>
                    {Array.from({ length: Math.ceil(greekcharacters.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={currentPage === index + 1 ? styles.active : ""}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </>
    )
}