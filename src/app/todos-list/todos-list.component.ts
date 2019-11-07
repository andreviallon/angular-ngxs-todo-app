import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

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

  ngOnInit() {
  }

}
