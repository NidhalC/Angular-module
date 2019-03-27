import { Component, OnInit } from '@angular/core';
import {Todo} from "../model/Todo";

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  constructor() { }



  listTodo:Array<Todo> =
    [ new Todo('course', false),
      new Todo('lire', true),
      new Todo('Reparer Voiture', false)
    ];

  updateListAlert(listTodo){
    alert('list update')
  }
  addToList(todo){
    this.listTodo.push(todo);
  }
  deleteList(todo){
    this.listTodo = [];

  }

  ngOnInit() {
  }

}
