import currentDataReducer from './currentDataReducer';
import searchDataReducer from './searchDataReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    currentData: currentDataReducer,
    searchData: searchDataReducer

})

export default rootReducer;