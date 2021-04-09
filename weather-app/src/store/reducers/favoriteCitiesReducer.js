const initState = {
    favoriteCities:[]
};

const favoriteCitiesReducer = (state = initState,action) =>{
    switch (action.type) {
        case 'SET_FAVORITE_CITY':
            return {
                ...state,
                favoriteCities:[...state.favoriteCities,action.payload]
            };
    
        default:
            return state;
    }
}

export default favoriteCitiesReducer