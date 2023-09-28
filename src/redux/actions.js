export function orderByName(payload) { //asc y desc 
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}

export const setCharacters = (greekcharacters) => {
    return {
        type: 'SET_CHARACTERS',
        payload: greekcharacters,
    };
};
