import { Actions } from './actions'
import { ADD_TODO, DELETE_TODO, FINISH_TODO, ITodo, UNFINISH_TODO, IState, SHOW } from './constants'

const initialState: IState = {
    todos: [],
    show: 'pendient',
}

const rootReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ADD_TODO: return {
            ...state, 
            todos: [action.payload, ...state.todos]
        }        
        case DELETE_TODO: return {
            ...state, 
            todos: state.todos.filter((todo: ITodo) => todo.id !== action.payload)
        }
        case FINISH_TODO: return {
            ...state,
            todos: state.todos.map((todo: ITodo) => 
                todo.id === action.payload ? 
                {
                    ...todo,
                    completed: true,
                } : todo
            )
        }
        case UNFINISH_TODO: return {
            ...state, 
            todos: state.todos.map((todo: ITodo) => 
                todo.id === action.payload ? 
                {
                    ...todo, 
                    completed: false, 
                } : todo
            )
        }
        case SHOW: return {
            ...state, 
            show: action.payload
        }
        default: return state 
    }
}

export default rootReducer