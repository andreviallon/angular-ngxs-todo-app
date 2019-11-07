import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Todo } from './../models/todo.model'
import { TodoState } from './../state/todo.state'
import { RemoveTodo } from './../actions/todo.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {

  @Select(TodoState.getTodos) todos$: Observable<Todo>

  constructor(private store: Store) {
  }

  removeTodo(i: number) {
    this.store.dispatch(new RemoveTodo(i));
  }

}
