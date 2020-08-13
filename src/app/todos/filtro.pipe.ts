import { filtrosValidos } from './../filtro/filtro.actions';
import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    console.log('filro pipe: ', filtro);
    
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.completado)
        break;
      case 'pendientes':
        return todos.filter(todo => !todo.completado)
        break;
      default:
        return todos
        break;
    }
  }

}
