import {searchData} from '../../test-data'
const initState = searchData
const searchDataReducer = (state=searchData,action) =>{
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