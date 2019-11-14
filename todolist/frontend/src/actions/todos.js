import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import { GET_TODOS, DELETE_TODO, ADD_TODO } from "./types";

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
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};


// DELETE TODO
export const deleteTodo = id => dispatch => {
    axios
        .delete(`/api/todos/${id}/`)
        .then(res => {
            dispatch(createMessage({ deleteTodo: "İş Silindi" }));
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
