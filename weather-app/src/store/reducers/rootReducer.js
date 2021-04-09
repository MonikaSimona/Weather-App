import currentDataReducer from './currentDataReducer';
import searchDataReducer from './searchDataReducer';
import favoriteCitiesReducer from './favoriteCitiesReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    currentDataReducer: currentDataReducer,
    searchDataReducer: searchDataReducer,
    favoriteCitiesReducer:favoriteCitiesReducer

})

export default rootReducer;