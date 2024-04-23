import { Helmet } from "react-helmet";
import styles from "./Home.module.css";
import EraPreolimpica from "./EraPreolimpica";
import Titanomaquia from "./Titanomaquia";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageChange";

export default function Home() {
  const { language } = useLanguage();
  const uranoIMG =
    "https://res.cloudinary.com/dzhiauyws/image/upload/v1713885738/Characters%20Greek%20Mythology/WhereverImages/urano_dxvykz.jpg";
  const universo =
    "https://res.cloudinary.com/dzhiauyws/image/upload/v1713885738/Characters%20Greek%20Mythology/WhereverImages/inicio-universo-griego-caos_ct3zqt.jpg";
  const tierra =
    "https://res.cloudinary.com/dzhiauyws/image/upload/v1713885738/Characters%20Greek%20Mythology/WhereverImages/tierra_mswbfx.webp";
  return (
    <>
      <Helmet>
        <title>
          {language === "español"
            ? "Mitologia Griega | Valentino Micheloni"
            : "Greek Mythology | Valentino Micheloni"}
        </title>
      </Helmet>
      <div className={styles.home}>
        <div className={styles.div_main}>
          <img
            className={styles.intro_img}
            src={universo}
            alt=""
            id="edadpreolimpica"
          />
          <img className={styles.intro_img} src={tierra} alt="" />
          <img
            className={`${styles.intro_img} ${styles.imgurano}`}
            src={uranoIMG}
            alt=""
          />
          <EraPreolimpica />
          <Titanomaquia />
          <Link className={styles.link_to_characters} to={"/characters"}>
            {language === "español"
              ? "Ve nuestra lista de personajes"
              : "See our character´s list"}
            <span className={styles.link_to_characters}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#b04a2e"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
