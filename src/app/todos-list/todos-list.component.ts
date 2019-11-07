import { PriorityEmun } from './../models/todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {

  todos = [
    {
      name: 'Todo',
      category: 'Cartegory',
      priority: 'Small'
    },
    {
      name: 'Todo',
      category: 'Cartegory',
      priority: 'Small'
    },
    {
      name: 'Todo',
      category: 'Cartegory',
      priority: 'Small'
    }
  ]

  constructor() { }

}
