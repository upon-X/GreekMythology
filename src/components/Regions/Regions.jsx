import { useLanguage } from "../LanguageChange";
import styles from "./Regions.module.css";

export default function Regions() {
  const { language } = useLanguage();
  return (
    <>
      <div className={styles}>{language === "es" ? "regiones" : "regions"}</div>
    </>
  );
}
