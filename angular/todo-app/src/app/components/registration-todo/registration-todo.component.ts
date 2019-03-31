import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-registration-todo',
  templateUrl: './registration-todo.component.html',
  styleUrls: ['./registration-todo.component.scss'],
})
export class RegistrationTodoComponent implements OnInit {
  todoForm: FormGroup;
  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.todoForm = this.fb.group({
      title: [''],
      description: [''],
      deadline: [''],
    });
  }

  ngOnInit() {}

  register() {
    this.todoService.createNewTodo(this.todoForm.value);
  }
}
