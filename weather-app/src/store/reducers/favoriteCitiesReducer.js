const initState = [];

const favoriteCitiesReducer = (state = initState,action) =>{
    switch (action.type) {
        case 'ADD_CITY':
            return [
               ...state,
               {
                   name:action.payload
               }
            ];
     
        default:
            return state;
    }
}

export default favoriteCitiesReducer