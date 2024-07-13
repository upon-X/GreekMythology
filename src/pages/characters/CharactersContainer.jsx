import { useLanguage } from "../../components/LanguageChange";
import SearchBar from "../../components/SearchBar/SearchBar";
import Character from "../../components/Characters/Character";
import styles from "./CharactersContainer.module.css";

export default function CharactersContainer() {
  const { language } = useLanguage();
  return (
    <div className={styles.container_charac}>
      <div className={styles.characters}>
        <h1 className={styles.title_charac}>
          {language === "español"
            ? "Personajes Históricos"
            : "Historical Characters"}
        </h1>
        <SearchBar />
        <Character />
      </div>
    </div>
  );
}
