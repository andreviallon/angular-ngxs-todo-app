import { Injectable } from '@angular/core';
import { Todo } from './models/todo.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todosCollection: AngularFirestoreCollection<Todo>;
  todos: Observable<Todo[]>;
  todoDoc: AngularFirestoreDocument<Todo>;

  constructor(public afs: AngularFirestore) {

    this.todos = this.afs.collection('todos').valueChanges();

    // this.todos = this.todosCollection.snapshotChanges().map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as Todo;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // });

    console.log('this.todosCollection.snapshotChanges()', this.todosCollection);
  }

  getTodos(): Observable<Todo[]> {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todosCollection.add(todo);
  }

  deleteTodo(todo: Todo): void {
    this.todoDoc = this.afs.doc(`todos/${todo.id}`);
    this.todoDoc.delete();
  }

  updateTodo(todo: Todo): void {
    this.todoDoc = this.afs.doc(`todos/${todo.id}`);
    this.todoDoc.update(todo);
  }
}
