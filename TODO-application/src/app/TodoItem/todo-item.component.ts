import { Component, OnInit, Input, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {Todo} from "../model/Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges {

  @Input()
  todo:Todo;

  @Output()
  todoItemUpdate:EventEmitter<Todo>= new EventEmitter<Todo>();

  updateItem(listItem){
    this.todoItemUpdate.emit(this.todo);

  }

  handleCheckBoxChange() {
    this.todo.isDone = !this.todo.isDone;
  }
  handleClick() {
    console.log("TODO", this.todo)
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const i = changes['todo'];
    if (i.previousValue){
      console.log('Previous : ${i.previousValue.isDone}')
    }
    console.log('Current : ${i.previousValue.isDone}')

  }

}
