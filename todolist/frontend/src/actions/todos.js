import axios from "axios";
import { createMessage } from "./messages";

import { GET_TODOS, DELETE_TODO, ADD_TODO, GET_ERRORS } from "./types";

//GET TODOS
export const getTodos = () => dispatch => {
    axios
        .get("/api/todos/")
        .then(res => {
            dispatch({
                type: GET_TODOS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};


// DELETE TODO
export const deleteTodo = id => dispatch => {
    axios
        .delete(`/api/todos/${id}/`)
        .then(res => {
            dispatch(createMessage({ deleteTodo: "Todo Deleted" }));
            dispatch({
                type: DELETE_TODO,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

//Add TODO
export const addTodo = todo => dispatch => {
    axios
        .post("/api/todos/", todo)
        .then(res => {
            dispatch({
                type: ADD_TODO,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};
