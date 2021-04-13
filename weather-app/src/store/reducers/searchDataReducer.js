
const initState = {}
const searchDataReducer = (state=initState,action) =>{
    switch (action.type) {
        case 'SET_CITY':
            return {
                ...state,
                data:action.payload
            };
    
        default:
            return state;
    }


}
export default searchDataReducer;