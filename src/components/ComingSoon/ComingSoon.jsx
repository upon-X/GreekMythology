import { useLanguage } from "../LanguageChange";
import styles from "./ComingSoon.module.css";
export const ComingSoon = () => {
  const { language } = useLanguage();
  return (
    <div className={styles.main_div}>
      <h2>{language === "español" ? "Proximamente..." : "Coming Soon..."}</h2>
    </div>
  );
};
