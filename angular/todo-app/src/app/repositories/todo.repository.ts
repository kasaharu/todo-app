import { Injectable } from '@angular/core';

import { Todo } from '../core/domains';

@Injectable({
  providedIn: 'root',
})
export class TodoRepository {
  localStorageKey = 'kasaharu-todo-app-angular-1';
  constructor() {}

  findTodoList() {
    return JSON.parse(localStorage.getItem(this.localStorageKey));
  }

  updateTodoList(newTodoList: Todo[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(newTodoList));
  }
}
