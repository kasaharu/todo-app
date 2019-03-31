import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTodoComponent } from './registration-todo.component';

describe('RegistrationTodoComponent', () => {
  let component: RegistrationTodoComponent;
  let fixture: ComponentFixture<RegistrationTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationTodoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
