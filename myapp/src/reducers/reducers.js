import {combineReducers} from 'redux';
import {reducer} from './login/reducer';
export default combineReducers({
	login:reducer
});