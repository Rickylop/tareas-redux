import { createReducer, on } from '@ngrx/store';
import * as actions from '../filtro/filtro.actions'

export const initialState: actions.filtrosValidos = 'todos' ;

const _filtroReducer = createReducer(initialState,
  on(actions.setFiltro, (state, {filtro}) => filtro ),
);

export function counterReducer(state, action) {
  return _filtroReducer(state, action);
}