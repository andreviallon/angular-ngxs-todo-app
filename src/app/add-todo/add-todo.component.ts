import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  @ViewChild('name', { static: false }) name: ElementRef;

  @Output() onAddTodo = new EventEmitter<string>();

  addTodo(todo: string) {
    this.onAddTodo.emit(todo);
  }
}
