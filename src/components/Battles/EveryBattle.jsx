import { useEffect } from "react";
import battlesjson from "../../../battles.json";
import { setBattles } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../LanguageChange";

export const EveryBattle = () => {
  const battles = useSelector((state) => state.battles);
  const dispatch = useDispatch();
  const { language } = useLanguage();

  useEffect(() => {
    const jsonData = battlesjson;
    dispatch(setBattles(jsonData.battles));
  }, [dispatch]);
  return (
    <div>
      {battles.map((battle, index) => (
        <div key={index}>
          <h2>{language === "español" ? battle.titulo : battle.title}</h2>
        </div>
      ))}
    </div>
  );
};
