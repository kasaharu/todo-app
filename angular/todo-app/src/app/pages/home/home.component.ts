import { Component, OnInit } from '@angular/core';

import { TodoForm } from '../../core/models';
import { TodoService } from '../../services/todo.service';
import { TodoUsecase } from '../../usecases/todo.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private todoService: TodoService, private todoUsecase: TodoUsecase) {}

  ngOnInit() {
    this.todoUsecase.initialize();
  }

  createNewTodo(todo: TodoForm) {
    this.todoService.createNewTodo(todo);
  }
}
