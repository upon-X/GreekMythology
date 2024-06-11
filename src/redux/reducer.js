/* eslint-disable no-case-declarations */
const initialState = {
  greekcharacters: [],
  allGreekCharacters: [], // Estado adicional para almacenar todos los personajes
  greekSpecies: [],
  count: 0,
  notFound: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "ORDER_BY_NAME":
      const sortedCharacters = [...state.greekcharacters].sort((a, b) => {
        if (action.payload === "A-Z") {
          return a.nombreEs.localeCompare(b.nombreEs);
        } else {
          return b.nombreEs.localeCompare(a.nombreEs);
        }
      });
      return {
        ...state,
        greekcharacters: sortedCharacters,
      };
    case "SET_CHARACTERS":
      return {
        ...state,
        greekcharacters: action.payload,
        allGreekCharacters: action.payload, // Guardar todos los personajes
      };
    case "ORDER_BY_SPECIES":
      const sortedBySpecies = [...state.greekcharacters].sort((a, b) => {
        const speciesA = a.especieEs.toLowerCase();
        const speciesB = b.especieEs.toLowerCase();
        if (action.payload === "ASC") {
          return speciesA.localeCompare(speciesB);
        } else {
          return speciesB.localeCompare(speciesA);
        }
      });
      return {
        ...state,
        greekcharacters: sortedBySpecies,
      };
    case "SEARCH_BY_NAME":
      if (action.payload === "") {
        // Restablecer a todos los personajes si la búsqueda está vacía
        return {
          ...state,
          greekcharacters: state.allGreekCharacters,
          notFound: false,
        };
      }
      const searchQuery = action.payload.toLowerCase();
      const filteredCharacters = state.allGreekCharacters.filter((character) =>
        character.nombreEs.toLowerCase().includes(searchQuery)
      );
      return {
        ...state,
        greekcharacters: filteredCharacters,
        notFound: filteredCharacters.length === 0,
      };
    default:
      return state;
  }
};

export default rootReducer;
