import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_TODO_ITEMS, ADD_TODO_ITEM, DELETE_TODO_ITEM, COMPLETE_TODO_ITEM} from "./types";

//GET TODOS Items
export const getTodoItems = id => (dispatch, getState) => {
    axios
        .get(`/api/todoItemsList/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_TODO_ITEMS,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

//Add TODOItem
export const addTodoItem = todoItem => (dispatch, getState) => {
    axios
        .post("/api/todoItem/", todoItem, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addTodoItem: "İş eklendi" }));
            dispatch({
                type: ADD_TODO_ITEM,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

// DELETE TODO
export const deleteTodoItem = id => (dispatch, getState) => {
    axios
        .delete(`/api/todoItem/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteTodo: "İş silindi" }));
            dispatch({
                type: DELETE_TODO_ITEM,
                payload: id
            });
        })
        .catch(err => console.log(err));
};


// Complete TODO
export const completeTodoItem = id => (dispatch, getState) => {
    axios
        .get(`/api/completeItem/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ completeTodo: "İş tamamlandı" }));
            dispatch({
                type: COMPLETE_TODO_ITEM,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

