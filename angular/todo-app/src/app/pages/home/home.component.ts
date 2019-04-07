import { Component, OnInit } from '@angular/core';

import { TodoForm } from '../../core/models';
import { TodoUsecase } from '../../usecases/todo.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private todoUsecase: TodoUsecase) {}

  ngOnInit() {
    this.todoUsecase.initialize();
  }

  createNewTodo(todo: TodoForm) {
    this.todoUsecase.create(todo);
  }
}
