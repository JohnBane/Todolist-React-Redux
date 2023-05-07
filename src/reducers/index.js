import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../constants/actionTypes'

const initialState = {
    todos: [],
}

function todosReducer(state = initialState.todos, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,

                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            );
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    todos: todosReducer,
})

export default rootReducer;