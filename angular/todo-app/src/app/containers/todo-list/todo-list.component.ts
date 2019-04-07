import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Todo } from '../../core/domains';
import { TodoForm } from '../../core/models';
import { TodoQuery } from '../../queries/todo.query';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Output()
  createNewTodo = new EventEmitter<TodoForm>();

  isVisibleRegistrationModal = false;

  todoList$: Observable<Todo[]>;

  constructor(private todoQuery: TodoQuery) {
    this.todoList$ = this.todoQuery.todoList$;
  }

  ngOnInit() {}

  registerNewTodo(newTodo: TodoForm) {
    this.createNewTodo.emit(newTodo);
    this.isVisibleRegistrationModal = false;
  }

  openModal() {
    this.isVisibleRegistrationModal = true;
  }

  closeModal() {
    this.isVisibleRegistrationModal = false;
  }
}
