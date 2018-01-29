import {combineReducers} from 'redux';
import {loginReducer} from './login/reducer';
import {memberReducer} from './members/reducer';

export default combineReducers({
	login:loginReducer,
	members:memberReducer
});
