import { ComingSoon } from "../../components/ComingSoon/ComingSoon";
import { useLanguage } from "../../components/LanguageChange";
import styles from "./Battles.module.css";
// import { EveryBattle } from "./EveryBattle";

export default function Battles() {
  const { language } = useLanguage();
  return (
    <div>
      <h1 className={styles.title_charac}>
        {language === "español" ? "Batallas Históricas" : "Historical Battles"}
      </h1>
      {/* <section>
        <EveryBattle />
      </section> */}
      <ComingSoon />
    </div>
  );
}
