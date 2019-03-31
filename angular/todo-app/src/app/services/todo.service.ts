import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../core/domains';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  _todoList$ = new BehaviorSubject<Todo[]>([]);

  get todoList$() {
    return this._todoList$;
  }

  constructor() {}

  fetchTodoList() {
    const savedTodoList = JSON.parse(localStorage.getItem('kasaharu-todo-app-angular-1'));
    this._todoList$.next(savedTodoList);
  }

  createNewTodo(newTodo) {
    let newTodoList: Todo[];
    let savedTodoList = JSON.parse(localStorage.getItem('kasaharu-todo-app-angular-1'));

    if (savedTodoList) {
      const listCount = savedTodoList.length;
      newTodoList = savedTodoList.concat({ ...newTodo, id: listCount + 1, isCompleted: false });
    } else {
      newTodoList = [{ ...newTodo, id: 1, isCompleted: false }];
    }

    localStorage.setItem('kasaharu-todo-app-angular-1', JSON.stringify(newTodoList));
  }
}
