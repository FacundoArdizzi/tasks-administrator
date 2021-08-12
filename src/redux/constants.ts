export interface ITodo {
    content: string,
    completed: boolean,
    id: number,
}

export interface IState {
    todos: ITodo[],
    show: string,
}

export const ADD_TODO = 'ADD_TODO'
export type ADD_TODO = typeof ADD_TODO;

export const DELETE_TODO = 'DELETE_TODO'
export type DELETE_TODO = typeof DELETE_TODO

export const FINISH_TODO = 'FINISH_TODO'
export type FINISH_TODO = typeof FINISH_TODO

export const UNFINISH_TODO = 'UNFINISH_TODO'
export type UNFINISH_TODO = typeof UNFINISH_TODO

export const SHOW = 'SHOW'
export type SHOW = typeof SHOW