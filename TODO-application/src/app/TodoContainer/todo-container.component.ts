import { Component, OnInit } from '@angular/core';
import {Todo} from "../model/Todo";
import TodoService from "../services/TodoService"
import {GithubApiService} from "../services/example-httpClient/github-api.service";
import {ApiService} from "../services/api-service";

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  listTodo:Array<Todo> ;

  constructor(private todoService:TodoService ) { }

  updateListAlert(listTodo){
    alert('list update')
  }
  addToList(todo:Todo){
     this.todoService.addTodo(todo).then((data)=>{ this.listTodo = data });;
  }
  deleteList(todo:Todo){
     return this.todoService.deleteTodo().then((data)=>{ this.listTodo = data });;
  }
  ngOnInit() {

    this.todoService.getTodo().then((data:any)=>{ this.listTodo = data });



  }

}
