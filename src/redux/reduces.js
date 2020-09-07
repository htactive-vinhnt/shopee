import { combineReducers } from 'redux';
import cardReducer from './Card/reduce';

const reduces = combineReducers({
    card: cardReducer,
});

export default reduces;