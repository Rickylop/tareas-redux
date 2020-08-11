import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './models/todo'

export const initialState: Todo[] = [
    new Todo('salvar al mundo')
];

const _todoReducer = createReducer(initialState,
  on(crear, (state, { texto }) => [...state, new Todo( texto )]),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
} 