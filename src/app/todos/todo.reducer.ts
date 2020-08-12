import { createReducer, on } from '@ngrx/store';
import { crear, toogle, editar } from './todo.actions';
import { Todo } from './models/todo'

export const initialState: Todo[] = [
    new Todo('salvar al mundo'),
    new Todo('salvar al mundo1'),
    new Todo('salvar al mundo2'),
    new Todo('salvar al mundo3'),

];

const _todoReducer = createReducer(initialState,
  //Funcionalidad de las acciones
  on(crear, (state, { texto }) => [...state, new Todo( texto )]),
  on(toogle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id == id) {
        return{
          ...todo,
          completado: !todo.completado
        }
      }else{
        return todo;
      }
    })
  }),
  on(editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id == id) {
        return{
          ...todo,
          texto: texto
        }
      }else{
        return todo;
      }
    })
  }),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
} 