import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-todo',
  templateUrl: './registration-todo.component.html',
  styleUrls: ['./registration-todo.component.scss'],
})
export class RegistrationTodoComponent implements OnInit {
  @Output()
  register = new EventEmitter();

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
