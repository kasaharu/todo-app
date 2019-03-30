import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Todo } from '../../core/domains';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList$: Observable<Todo[]>;
  constructor() {}

  ngOnInit() {
    this.todoList$ = of([
      { id: 1, title: 'title 1', isCompleted: false },
      { id: 2, title: 'title 2', isCompleted: false },
      { id: 3, title: 'title 3', isCompleted: false },
    ]);
  }
}
