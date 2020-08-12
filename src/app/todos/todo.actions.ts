import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] crea todo',
    props<{ texto: string }>()
);

//cambia estado de tarea
export const toogle = createAction(
    '[TODO] Toogle todo',
    props<{ id: number }>()
);

export const editar = createAction(
    '[TODO] Editar todo',
    props<{ id: number, texto: string }>()
);

export const borrar = createAction(
    '[TODO] Borrar todo',
    props<{ id: number }>()
);