import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { Select, Store, InitState } from '@ngxs/store';
import { TodoState } from '../state/todo.state';

@Component({
  selector: 'completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss']
})
export class CompletedTodosComponent {

  @Select(TodoState.getCompletedTodos) complitedTodos$: Observable<Todo>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new InitState());
  }

}
