import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import aReducer from './a';
import bReducer from './b';

const reducer = combineReducers({
    router: routerReducer,
    a:aReducer,
    b:bReducer
});

export default reducer;