import {Todo} from "../model/Todo";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export default class TodoApi{

  fetchTodoList():Promise<Array<Todo>>{
    return new Promise((resolve => {
      setTimeout(()=>{
        resolve([
          new Todo('course', false),
          new Todo('lire', true),
          new Todo('Reparer Voiture', false)
        ])
      },2000);
    }));
    
  }
}
