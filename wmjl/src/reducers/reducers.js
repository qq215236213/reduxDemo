import {combineReducers} from 'redux';
import {loginReducer} from './login/reducer';
import {memberReducer} from './members/reducer';
import {platformReducer} from './platforms/reducer';
import {managerReducer} from './managers/reducer';

export default combineReducers({
	login:loginReducer,
	members:memberReducer,
	platform:platformReducer,
	managers:managerReducer,
});
