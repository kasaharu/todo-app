import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-todo',
  templateUrl: './registration-todo.component.html',
  styleUrls: ['./registration-todo.component.scss'],
})
export class RegistrationTodoComponent implements OnInit {
  todoForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: [''],
      description: [''],
      deadline: [''],
    });
  }

  ngOnInit() {}

  register() {
    console.log(this.todoForm.value);
  }
}
