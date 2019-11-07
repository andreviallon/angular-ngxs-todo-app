import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTodo } from './../actions/todo.actions';
import { Todo, PriorityEmun } from '../models/todo.model';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit, OnChanges {

  todo: Todo = {
    name: '',
    category: '',
    priority: PriorityEmun.SMALL
  }

  constructor(private store: Store) { }

  ngOnChanges() {
    console.log('todo', this.todo);
  }

  ngOnInit() { }

  addTodo(todo: Todo) {
    console.log('todo', todo);
    this.store.dispatch(new AddTodo({
      name: todo.name,
      category: todo.category,
      priority: todo.priority
    }))
  }

}
