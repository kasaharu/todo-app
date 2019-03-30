import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../../core/domains';

@Component({
  selector: 'app-todo-content-list',
  templateUrl: './todo-content-list.component.html',
  styleUrls: ['./todo-content-list.component.scss'],
})
export class TodoContentListComponent implements OnInit {
  @Input()
  todoList: Todo[];

  constructor() {}

  ngOnInit() {}
}
