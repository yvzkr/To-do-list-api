import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_TODO_ITEMS, ADD_TODO_ITEM } from "./types";

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



