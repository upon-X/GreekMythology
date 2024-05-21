export function orderByName(payload) {
  //asc y desc
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderBySpecies(order) {
  //dios, semidios, humano, centauro
  return {
    type: "ORDER_BY_SPECIES",
    payload: order,
  };
}

export const setCharacters = (greekcharacters) => {
  return {
    type: "SET_CHARACTERS",
    payload: greekcharacters,
  };
};

export const searchByName = (payload) => {
  return {
    type: "SEARCH_BY_NAME",
    payload,
  };
};
