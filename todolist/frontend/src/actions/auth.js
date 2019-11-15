import axios from "axios";
import { returnErrors } from "./messages";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";


// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    //User Loading 
    dispatch({ type: USER_LOADING });



    axios.get("/api/auth/user", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });


};

//Login User

// CHECK TOKEN & LOAD USER
export const login = (username, password) => dispatch => {
    // header
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    //Request Boody

    const body = JSON.stringify({ username, password });


    axios.post("/api/auth/login", body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL
            });
        });


};

//2
//REister user
export const register = ({ username, password, email }) => dispatch => {
    // header
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    //Request Boody

    const body = JSON.stringify({ username, email, password });


    axios.post("/api/auth/register", body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL
            });
        });


};




//log out user

export const logout = () => (dispatch, getState) => {




    axios.post("/api/auth/logout/", null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));

        });


};


// Setup config with token - help funtion

export const tokenConfig = getState => {
    //get token from state
    const token = getState().auth.token;

    // header
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    // If token, add to headers config
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }


    return config;
}

