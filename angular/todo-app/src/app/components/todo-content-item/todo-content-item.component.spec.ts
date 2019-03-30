import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoContentItemComponent } from './todo-content-item.component';

describe('TodoContentItemComponent', () => {
  let component: TodoContentItemComponent;
  let fixture: ComponentFixture<TodoContentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoContentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
