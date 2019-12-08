import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './../models/todo.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {

  @Input() todos$: Observable<Todo>

  @Output() onRemoveTodo = new EventEmitter<number>();

  removeTodo(i: number) {
    this.onRemoveTodo.emit(i);
  }
}
