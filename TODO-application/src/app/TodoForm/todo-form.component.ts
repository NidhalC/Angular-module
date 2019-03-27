import { Component, OnInit, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {Todo} from "../model/Todo";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title : string = '';


  @Output()
  formTodo:EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output()
  formDelete:EventEmitter<Todo> = new EventEmitter<Todo>();


  handleClick(){
    this.formTodo.emit(new Todo(this.title, false));
  }
  handleResetClick(){
    this.formDelete.emit(new Todo(this.title, false));
  }

  handleChange(event) {
    console.log(event);
    this.title = event.target.value;
  }

  constructor() { }

  ngOnInit() {
  }


}
