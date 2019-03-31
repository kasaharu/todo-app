import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './containers/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationTodoComponent } from './components/registration-todo/registration-todo.component';
import { TodoContentListComponent } from './components/todo-content-list/todo-content-list.component';
import { TodoContentItemComponent } from './components/todo-content-item/todo-content-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HomeComponent,
    RegistrationTodoComponent,
    TodoContentListComponent,
    TodoContentItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
