import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoContainerComponent } from './TodoContainer/todo-container.component';
import { TodoListComponent } from './TodoList/todo-list.component';
import { TodoItemComponent } from './TodoItem/todo-item.component';
import { TodoFormComponent } from './TodoForm/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
