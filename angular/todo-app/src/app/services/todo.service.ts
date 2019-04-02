import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TodoForm } from '../core/models';
import { Todo } from '../core/domains';
import { TodoRepository } from '../repositories/todo.repository';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  _todoList$ = new BehaviorSubject<Todo[]>([]);

  get todoList$() {
    return this._todoList$;
  }

  constructor(private todoRepository: TodoRepository) {}

  fetchTodoList() {
    const savedTodoList = this.todoRepository.findTodoList();
    this._todoList$.next(savedTodoList);
  }

  createNewTodo(newTodo: TodoForm) {
    let newTodoList: Todo[];
    let savedTodoList = this.todoRepository.findTodoList();

    if (savedTodoList) {
      const listCount = savedTodoList.length;
      newTodoList = savedTodoList.concat({ ...newTodo, id: listCount + 1, isCompleted: false });
    } else {
      newTodoList = [{ ...newTodo, id: 1, isCompleted: false }];
    }

    this.todoRepository.updateTodoList(newTodoList);
    this._todoList$.next(newTodoList);
  }
}
