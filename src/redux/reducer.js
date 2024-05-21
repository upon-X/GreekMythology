/* eslint-disable no-case-declarations */
const initialState = {
  greekcharacters: [],
  greekSpecies: [],
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "ORDER_BY_NAME":
      const { payload } = action;
      // Ordenar los datos según el payload (A-Z o Z-A)
      const sortedCharacters = [...state.greekcharacters].sort((a, b) => {
        if (payload === "A-Z") {
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
        greekcharacters: action.payload, // Actualiza 'characters' con los datos del JSON
      };
    case "ORDER_BY_SPECIES":
      const { payload: speciesOrder } = action;
      const sortedBySpecies = [...state.greekcharacters].sort((a, b) => {
        const speciesA = a.especieEs.toLowerCase();
        const speciesB = b.especieEs.toLowerCase();
        if (speciesOrder === "ASC") {
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
      const searchQuery = action.payload.toLowerCase();
      const filteredCharacters = state.greekcharacters.filter((character) =>
        character.nombreEs.toLowerCase().includes(searchQuery)
      );
      return {
        ...state,
        greekcharacters: filteredCharacters,
        notFound: filteredCharacters.length === 0, // Si no se encontraron personajes, establece notFound en true
      };
    default:
      return state;
  }
};

export default rootReducer;
