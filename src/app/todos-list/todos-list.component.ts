import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Todo } from './../models/todo.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnChanges {

  @Input() todos$: Observable<Todo>

  @Output() onRemoveTodo = new EventEmitter<number>();

  ngOnChanges() {
    console.log('todos$', this.todos$);
  }

  removeTodo(i: number): void {
    this.onRemoveTodo.emit(i);
  }
}
