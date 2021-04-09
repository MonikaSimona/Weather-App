import { currentData } from '../../test-data';

const initState = currentData;

const currentDataReducer = (state={},action) =>{
    switch (action.type) {
        case 'CURRENT_CITY':
            return {
                ...state,
                data:action.payload
            };
    
        default:
            return state;
    }


}
export default currentDataReducer;