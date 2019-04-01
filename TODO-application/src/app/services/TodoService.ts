import {Injectable} from "@angular/core";
import {Todo} from "../model/Todo";
import TodoApi from "./TodoApi"
import {ApiService} from "./api-service";

@Injectable({
  providedIn : 'root'
})
export  default class TodoService {
  private listTodo:Array<Todo>;

  constructor(private todoApi:TodoApi, private apiService:ApiService){}

  // getTodo():Promise<Array<Todo>>{
  //   return new Promise((resolve => {
  //     this.todoApi.fetchTodoList().then(data => {
  //       this.listTodo = data;
  //       resolve(this.listTodo)
  //     })
  //   }));
  // }

  async getTodo():Promise<Array<Todo>>{
    this.listTodo = await this.todoApi.fetchTodoList();
    return this.listTodo;
  }

  async addTodo(todo:Todo){
    console.log('avant le push');
     return this.listTodo = [...this.listTodo, todo];


  }

  async deleteTodo(){
    console.log('delete');
   return this.listTodo = [];
  }

}

