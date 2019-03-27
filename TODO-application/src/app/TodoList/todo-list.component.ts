import { Component, OnInit, Input, Output,EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {Todo} from "../model/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnChanges {

  @Input()
  todoList:Todo[];

  @Output()
  todoListUpdated:EventEmitter<Todo> = new EventEmitter<Todo>();

  updateList(){
    //this.todoListUpdated.emit(this.todoList);
  }


  handlerUpdateItem(todoList){
    alert('Item Update')

  }

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    const l = changes['todoList'];
    if (l.previousValue){
      console.log('Previous : ${l.previousValue.isDone}')
    }
    console.log('Current : ${l.previousValue.isDone}')

  }


}
