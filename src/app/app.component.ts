import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoState } from './state/todo.state';
import { Todo } from './models/todo.model';
import { AddTodo, RemoveTodo, CheckTodo } from './actions/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select(TodoState.getTodos) todos$: Observable<Todo>

  constructor(private store: Store) { }

  onAddTodo(todo: Todo): void {
    this.store.dispatch(new AddTodo({ name: todo.name, checked: false }))
  }

  onCheckTodo(i: number): void {
    this.store.dispatch(new CheckTodo(i));
  }

  onRemoveTodo(i: number): void {
    this.store.dispatch(new RemoveTodo(i));
  }
}
