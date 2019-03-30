import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../../core/domains';

@Component({
  selector: 'app-todo-content-item',
  templateUrl: './todo-content-item.component.html',
  styleUrls: ['./todo-content-item.component.scss'],
})
export class TodoContentItemComponent implements OnInit {
  @Input()
  todoItem: Todo;

  constructor() {}

  ngOnInit() {}
}
