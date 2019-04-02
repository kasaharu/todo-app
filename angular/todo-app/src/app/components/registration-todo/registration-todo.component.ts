import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { TodoForm } from '../../core/models';

@Component({
  selector: 'app-registration-todo',
  templateUrl: './registration-todo.component.html',
  styleUrls: ['./registration-todo.component.scss'],
})
export class RegistrationTodoComponent implements OnInit {
  @Output()
  register = new EventEmitter<TodoForm>();

  todoForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: [''],
      description: [''],
      deadline: [''],
    });
  }

  ngOnInit() {}

  clickRegistrationButton() {
    this.register.emit(this.todoForm.value);
  }
}
