import { stat } from 'fs'
import { Actions } from './actions/index'
import { ADD_TODO, DELETE_TODO, FINISH_TODO, IState, ITodo } from './constants/index'

const initialState: IState = {
    todos: [],
    finishedTodo: []
}

const rootReducer = (state = initialState, action: Actions): IState => {
    switch(action.type) {
        case ADD_TODO: return {
            ...state, 
            todos: [...state.todos, action.payload]
        }
        case DELETE_TODO: return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)
        }
        /* case FINISH_TODO: 
        let todo: ITodo = state.todos.find(t => t.id === action.payload)
        return {
            ...state,
            finishedTodo: [...state.finishedTodo, todo]
        } */
        default: return state
    }
}

export default rootReducer;