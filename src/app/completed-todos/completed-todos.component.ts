import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../state/todo.state';
import { RemoveTodo, CheckTodo, InitState } from '../actions/todo.actions';

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

  onCheckTodo(i: number): void {
    this.store.dispatch(new CheckTodo(i));
  }

  onRemoveTodo(i: number): void {
    this.store.dispatch(new RemoveTodo(i));
  }

}
