import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageChange";
import ESflag from "/ESflag.webp";
import GBflag from "/GBflag.webp";

export default function NavBar() {
  const { language, changeLanguage } = useLanguage();
  const handleLanguageChange = () => {
    changeLanguage(language === "español" ? "english" : "español");
  };
  return (
    <div className={styles.nav_container}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          {language === "español" ? "Mitología Griega" : "Greek Mythology"}
        </Link>
        <div className={styles.navbar_links}>
          {/* <Link className={styles.nav_link} to='/'>
                        {language === 'español' ? 'Inicio' : 'Home'}
                    </Link> */}
          <Link className={styles.nav_link} to="/characters">
            {language === "español" ? "Personajes" : "Characters"}
          </Link>
          {/* <Link className={styles.nav_link} to='/regions'>
                        {language === 'español' ? 'Regiones' : 'Regions'}
                    </Link> */}
          <Link className={styles.nav_link} to="/battles">
            {language === "español" ? "Batallas" : "Battles"}
          </Link>
          <button
            className={styles.btn_change_lang}
            onClick={handleLanguageChange}
          >
            {language === "español" ? (
              <span className={styles.spanlang}>
                <img src={ESflag} />
              </span>
            ) : (
              <span className={styles.spanlang}>
                <img src={GBflag} />
              </span>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
