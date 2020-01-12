import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoState } from '../state/todo.state';
import { Todo } from '../models/todo.model';
import { AddTodo, RemoveTodo, CheckTodo, InitState } from '../actions/todo.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {


  @Select(TodoState.getTodos) todos$: Observable<Todo>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new InitState())
  }

  onAddTodo(todo: string): void {
    this.store.dispatch(new AddTodo({ name: todo, checked: false }))
  }

  onCheckTodo(i: number): void {
    this.store.dispatch(new CheckTodo(i));
  }

  onRemoveTodo(i: number): void {
    this.store.dispatch(new RemoveTodo(i));
  }

}
