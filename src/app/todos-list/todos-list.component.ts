import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Todo } from './../models/todo.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {

  @ViewChild('checked', { static: false }) checked: ElementRef;

  @Input() todos$: Observable<Todo>

  @Output() onRemoveTodo = new EventEmitter<number>();
  @Output() onCheckTodo = new EventEmitter<number>();

  checkTodo(i: number) {
    this.onCheckTodo.emit(i);
  }

  removeTodo(i: number): void {
    this.onRemoveTodo.emit(i);
  }
}
