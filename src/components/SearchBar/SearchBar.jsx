import { useState } from "react";
import styles from "./SearchBar.module.css";
import { useLanguage } from "../LanguageChange";
import { orderByName, orderBySpecies, searchByName } from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const { language } = useLanguage();
  const dispatch = useDispatch();
  const [order, setOrder] = useState("Default"); // Agregar estado local para el orden

  function handleSearchCharacter(e) {
    const searchQuery = e.target.value;
    e.target.value.length === 0 ? null : dispatch(searchByName(searchQuery));
  }

  function handleSort(e) {
    e.preventDefault();
    const selectedOrder = e.target.value;
    setOrder(selectedOrder);
    if (selectedOrder === "SPECIES") {
      // Specify order (ASC or DESC) based on your requirements
      dispatch(orderBySpecies("ASC"));
    } else {
      dispatch(orderByName(selectedOrder));
    }
  }

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.search_input}
        type="search"
        maxLength={30}
        placeholder={language === "español" ? "Buscar..." : "Search..."}
        onChange={(e) => handleSearchCharacter(e)}
        pattern="[A-Za-zÀ-ÖØ-öø-ÿ]+"
      />
      <div className={styles.orden}>
        <select
          className={styles.select}
          onChange={(e) => handleSort(e)}
          value={order}
        >
          <option value="Default" hidden>
            {language === "español" ? "ORDENAR POR" : "SORT BY"}
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="SPECIES">
            {language === "español" ? "Especie" : "Specie"}
          </option>
        </select>
      </div>
    </div>
  );
}
