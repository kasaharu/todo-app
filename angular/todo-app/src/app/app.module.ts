import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './containers/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationTodoComponent } from './components/registration-todo/registration-todo.component';
import { TodoContentListComponent } from './components/todo-content-list/todo-content-list.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, HomeComponent, RegistrationTodoComponent, TodoContentListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
