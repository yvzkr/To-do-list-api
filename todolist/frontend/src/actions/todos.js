import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_TODOS, DELETE_TODO, ADD_TODO, COMPLETE_TODO } from "./types";

//GET TODOS
export const getTodos = () => (dispatch, getState) => {
    axios
        .get("/api/todos/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_TODOS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};


// DELETE TODO
export const deleteTodo = id => (dispatch, getState) => {
    axios
        .delete(`/api/todos/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteTodo: "İş silindi" }));
            dispatch({
                type: DELETE_TODO,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

//Add TODO
export const addTodo = id => (dispatch, getState) => {
    axios
        .post("/api/todos/", todo, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addTodo: "İş eklendi" }));
            dispatch({
                type: ADD_TODO,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};


// Complete TODO
export const completeTodo = id => (dispatch, getState) => {
    axios
        .get(`/api/complete/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ completeTodo: "İş tamamlandı" }));
            dispatch({
                type: COMPLETE_TODO,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};