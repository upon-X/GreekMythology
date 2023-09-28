const initialState = {
    greekcharacters: [],
    count: 0,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };
        case 'ORDER_BY_NAME':
            const { payload } = action;
            // Ordenar los datos según el payload (A-Z o Z-A)
            const sortedCharacters = [...state.greekcharacters].sort((a, b) => {
                if (payload === 'A-Z') {
                    return a.nombre.localeCompare(b.nombre);
                } else {
                    return b.nombre.localeCompare(a.nombre);
                }
            });
            return {
                ...state,
                greekcharacters: sortedCharacters,
            };
        case 'SET_CHARACTERS':
            return {
                ...state,
                greekcharacters: action.payload, // Actualiza 'characters' con los datos del JSON
            };
        default:
            return state;
    }
};

export default rootReducer;
