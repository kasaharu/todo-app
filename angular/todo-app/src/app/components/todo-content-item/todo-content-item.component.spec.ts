import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoContentItemComponent } from './todo-content-item.component';

describe('TodoContentItemComponent', () => {
  let component: TodoContentItemComponent;
  let fixture: ComponentFixture<TodoContentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoContentItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoContentItemComponent);
    component = fixture.componentInstance;
    component.todoItem = { id: 1, title: 'title 1', isCompleted: false };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
