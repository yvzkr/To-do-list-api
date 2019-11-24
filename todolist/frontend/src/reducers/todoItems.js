import { GET_TODO_ITEMS, ADD_TODO_ITEM, DELETE_TODO_ITEM, COMPLETE_TODO_ITEM} from '../actions/types.js';


const initialState = {
    todo_items: []
};

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_TODO_ITEMS:
            return {
                ...state,
                todo_items: action.payload
            };
        case ADD_TODO_ITEM:
            return {
                ...state,
                todo_items: [...state.todo_items, action.payload]
            };
        case DELETE_TODO_ITEM:
            return {
                ...state,
                todo_items: state.todo_items.filter(item => item.id !== action.payload)
            };
        case COMPLETE_TODO_ITEM:
            return{
                ...state,
                todo_items: action.payload
            }
        default:
            return state;
    }

}