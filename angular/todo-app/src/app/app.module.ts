import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListPageComponent } from './pages/todo-list/todo-list.component';
import { TodoListComponent } from './containers/todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, TodoListPageComponent, TodoListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
