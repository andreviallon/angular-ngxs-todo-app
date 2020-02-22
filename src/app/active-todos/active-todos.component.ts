import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../state/todo.state';
import { Todo } from '../models/todo.model';
import { CheckTodo, RemoveTodo, InitState } from '../actions/todo.actions';

@Component({
  selector: 'app-active-todos',
  templateUrl: './active-todos.component.html',
  styleUrls: ['./active-todos.component.scss']
})
export class ActiveTodosComponent implements OnInit {

  @Select(TodoState.getActiveTodos) complitedTodos$: Observable<Todo>;

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
