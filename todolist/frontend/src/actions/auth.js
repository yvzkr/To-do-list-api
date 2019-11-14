import axios from "axios";
import { returnErrors } from "./messages";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "./types";


// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
    //User Loading 
    dispatch({ type: USER_LOADING });


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
    axios.get("/api/auth/user", config)
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

