import { useLanguage } from "../LanguageChange";
import styles from "./Footer.module.css";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <>
      <footer className={styles.footer}>
        {language === "español" ? "Desarrollado por " : "Developed by "}
        <a
          className={styles.link_portfolio}
          href="https://valemiche.com.ar"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.span_link_portfolio}>
            Valentino Micheloni
          </span>
        </a>{" "}
        2024
      </footer>
    </>
  );
}
