/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

// Creación del contexto con un valor predeterminado útil para autocompletar en el desarrollo
const LanguageContext = createContext({
  language: "español", // valor predeterminado del lenguaje
  changeLanguage: () => {}, // función vacía por defecto
});

// Hook personalizado para usar el contexto de idioma
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Proveedor del contexto de idioma que envuelve la lógica del estado y la persistencia
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("español");

  // Efecto para inicializar el estado desde el almacenamiento local
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "español";
    setLanguage(storedLanguage);
  }, []);

  // Función para cambiar el idioma y actualizar el almacenamiento local
  const changeLanguage = (newLanguage) => {
    try {
      localStorage.setItem("language", newLanguage);
      setLanguage(newLanguage);
    } catch (error) {
      console.error("Failed to set language in localStorage:", error);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
