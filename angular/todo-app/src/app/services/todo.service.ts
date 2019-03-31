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
    const nextTodoList = [
      { id: 1, title: 'title 1', isCompleted: false },
      { id: 2, title: 'title 2', isCompleted: false },
      { id: 3, title: 'title 3', isCompleted: false },
    ];

    this._todoList$.next(nextTodoList);
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
