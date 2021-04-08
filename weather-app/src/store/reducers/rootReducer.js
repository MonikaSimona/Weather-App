import currentDataReducer from './currentDataReducer';
import searchDataReducer from './searchDataReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    currentDataReducer: currentDataReducer,
    searchDataReducer: searchDataReducer

})

export default rootReducer;