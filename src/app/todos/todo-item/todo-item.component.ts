import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AppState } from './../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions'

import { Todo } from './../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.todo.completado = true;
    console.log(this.todo);
    
    this.chkCompletado = new FormControl( this.todo.completado);
    this.txtInput = new FormControl( this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor =>{
      this.store.dispatch( actions.toogle({id: this.todo.id}));      
    })
  }

  editar(){
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion(){
    this.editando = false;

    if (this.txtInput.invalid) { return } //validar ingreso algun valor
    if (this.txtInput.value === this.todo.texto) { return } //validar si cambio el texto

    console.log('texto cambio');
    
    this.store.dispatch( 
      actions.editar({
        id: this.todo.id, 
        texto: this.txtInput.value
      }));      
  }

  borrar(){
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }
}
