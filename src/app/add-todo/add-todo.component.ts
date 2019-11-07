import { Component, OnChanges } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTodo } from './../actions/todo.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  constructor(private store: Store) { }

  addTodo(todo) {
    this.store.dispatch(new AddTodo({ name: todo }))
  }

}
