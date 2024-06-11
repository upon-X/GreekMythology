import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useLanguage } from "../LanguageChange";
import { orderByName, orderBySpecies, searchByName } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const { language } = useLanguage();
  const dispatch = useDispatch();
  const [order, setOrder] = useState("Default");

  const handleSearchCharacter = (e) => {
    const searchQuery = e.target.value.trim();
    dispatch(searchByName(searchQuery));
  };

  const handleSort = (e) => {
    const selectedOrder = e.target.value;
    setOrder(selectedOrder);
    if (selectedOrder === "SPECIES") {
      dispatch(orderBySpecies("ASC")); // Puedes cambiar "ASC" por "DESC" si prefieres otro orden predeterminado
    } else {
      dispatch(orderByName(selectedOrder));
    }
  };

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.search_input}
        type="search"
        maxLength={30}
        placeholder={language === "español" ? "Buscar..." : "Search..."}
        onChange={handleSearchCharacter}
        pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+"
      />
      <div className={styles.orden}>
        <select className={styles.select} onChange={handleSort} value={order}>
          <option value="Default" hidden>
            {language === "español" ? "ORDENAR POR" : "SORT BY"}
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="SPECIES">
            {language === "español" ? "Especie" : "Species"}
          </option>
        </select>
      </div>
    </div>
  );
}
