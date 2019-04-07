import { TestBed } from '@angular/core/testing';

import { TodoUsecase } from './todo.usecase';
import { TodoService } from '../services/todo.service';

export class MockTodoService {
  fetchTodoList() {}
}

describe('TodoUsecase', () => {
  let usecase: TodoUsecase;
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: TodoService, useClass: MockTodoService }],
    });
    usecase = TestBed.get(TodoUsecase);
    todoService = TestBed.get(TodoService);
  });

  it('call initialize()', () => {
    spyOn(todoService, 'fetchTodoList');
    usecase.initialize();
    expect(todoService.fetchTodoList).toHaveBeenCalled();
  });
});
