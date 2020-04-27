import { combineReducers } from 'redux';
// import alert from './alert';
import login from './login';
import register from './register';
import subjects from './subjects';

export default combineReducers( {
    // alert,
    login,
    register,
    subjects
});
