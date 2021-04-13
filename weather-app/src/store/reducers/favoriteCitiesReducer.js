const initState = [];

const favoriteCitiesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CITY':
            return [
                ...state,
                action.payload

            ];
        case 'DELETE_CITY':
            return state.filter(city => city !== action.payload);
        case 'ADD_CITIES':
            console.log(action.payload)
            return  action.payload;
        default:
            return state;
    }
}

export default favoriteCitiesReducer