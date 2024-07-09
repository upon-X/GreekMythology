import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters } from "../../redux/actions";
import charjson from "../../../greekcharacters.json";
import { useLanguage } from "../LanguageChange";
import styles from "./Character.module.css";

export default function Character() {
  const greekcharacters = useSelector((state) => state.greekcharacters);
  const notFound = useSelector((state) => state.notFound);
  const dispatch = useDispatch();
  const { language } = useLanguage();

  useEffect(() => {
    const jsonData = charjson;
    dispatch(setCharacters(jsonData.greekcharacters));
  }, [dispatch]);

  return (
    <>
      {notFound === false ? (
        <div className={styles.character}>
          {greekcharacters.map((character, index) => (
            <div className={styles.character_card} key={index}>
              <div className={styles.character_img_container}>
                <img
                  className={styles.character_img}
                  src={character.imagen}
                  alt="imagen del personaje"
                />
              </div>
              <h2 className={styles.character_nombre}>
                {language === "español"
                  ? character.nombreEs
                  : character.nombreEn}
              </h2>
              <p className={styles.character_especie}>
                {language === "español"
                  ? character.especieEs
                  : character.especieEn}
              </p>
              <p className={styles.character_reconocimiento}>
                {language === "español"
                  ? character.reconocimientoEs.join(", ")
                  : character.reconocimientoEn.join(", ")}
              </p>
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
      ) : (
        <div className={styles.not_found_section}>
          {language === "español"
            ? "No se han encontrado personajes según tu busqueda :("
            : "There are not characters that matches your search :("}
        </div>
      )}
    </>
  );
}
