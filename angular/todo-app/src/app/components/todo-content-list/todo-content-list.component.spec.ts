import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoContentListComponent } from './todo-content-list.component';

describe('TodoContentListComponent', () => {
  let component: TodoContentListComponent;
  let fixture: ComponentFixture<TodoContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoContentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
