import { Component, OnInit } from '@angular/core';

import { AppState } from './../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../../filtro/filtro.actions'

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos'
  filtros: actions.filtrosValidos[] = ['completados', 'pendientes', 'todos'];

  constructor(private store: Store<AppState> ) { }

  ngOnInit(): void {
    this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro)
  }

  cambiarFiltro(filtro: actions.filtrosValidos){
    console.log(filtro);
    this.store.dispatch(actions.setFiltro({filtro}));
    
  }
}
