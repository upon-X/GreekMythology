import { useEffect } from "react";
import battlesjson from "../../../battlesList.json";
import { setBattles } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../LanguageChange";
import styles from "./EveryBattle.module.css";

export const EveryBattle = () => {
  const battles = useSelector((state) => state.battles);
  const dispatch = useDispatch();
  const { language } = useLanguage();

  useEffect(() => {
    const jsonData = battlesjson;
    dispatch(setBattles(jsonData.battles));
  }, [dispatch]);
  return (
    <div className={styles.EveryBattle_container}>
      {battles.map((battle, index) => (
        <div key={index}>
          <h3 className={styles.battle_name}>
            {language === "español" ? battle.titulo : battle.title}
          </h3>
          <p className={styles.battle_desc}>
            {language === "español" ? battle.descripcion : battle.description}
          </p>
          <section className={styles.battle_image_container}>
            <img
              src={battle.image[0]}
              className={styles.battle_image}
              alt="image battle"
            />
            <img
              src={battle.image[1]}
              className={styles.battle_image}
              alt="image battle"
            />
          </section>
        </div>
      ))}
    </div>
  );
};
