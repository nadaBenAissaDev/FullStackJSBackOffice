import axios from 'axios';
import { setAlert } from './alert';
import { API_BASE_URL } from '../actions/types';
import {
    REGISTER_SUCCESS, REGISTER_FAIL,
    AUTH_ERROR, USER_LOADED,
    LOGIN_SUCCESS, LOGIN_FAIL,
    LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken';

//Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {

        const res = await axios.get(API_BASE_URL + '/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    }
    catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
}

//Register user
export const register = ({ firstname, lastname, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ firstname, lastname, email, password }); //stringify() convertit une valeur JavaScript en chaîne JSON

    try {
        const res = await axios.post(API_BASE_URL + '/api/register', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
}

//Login user
export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password }); //stringify() convertit une valeur JavaScript en chaîne JSON

    try {
        const res = await axios.post(API_BASE_URL + '/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAIL
        });
    }
}



