import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getTodos(): Todo[] {
    return [
      { name: 'Todo 1', checked: false },
      { name: 'Todo 2', checked: true },
      { name: 'Todo 3', checked: false }
    ];
  }

}
