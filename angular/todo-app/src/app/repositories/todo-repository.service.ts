import { Injectable } from '@angular/core';

import { Todo } from '../core/domains';

@Injectable({
  providedIn: 'root',
})
export class TodoRepositoryService {
  constructor() {}

  findTodoList() {
    return JSON.parse(localStorage.getItem('kasaharu-todo-app-angular-1'));
  }

  updateTodoList(newTodoList: Todo[]) {
    localStorage.setItem('kasaharu-todo-app-angular-1', JSON.stringify(newTodoList));
  }
}
