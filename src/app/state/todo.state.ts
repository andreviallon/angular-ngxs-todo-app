import { State, Action, StateContext, Selector } from '@ngxs/store';;
import { Todo } from './../models/todo.model';
import { AddTodo, RemoveTodo } from '../actions/todo.actions';

export class TodoStateModel {
  todos: Todo[]
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: [
      {
        name: 'todo'
      }, {
        name: 'todo 2'
      }, {
        name: 'todo 3'
      }, {
        name: 'todo 4'
      }
    ]
  }
})

export class TodoState {

  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todos;
  }

  @Action(AddTodo)
  add({ getState, patchState }: StateContext<TodoStateModel>, { payload }: AddTodo) {
    const state = getState();
    console.log('payload', payload);
    patchState({
      todos: [...state.todos, payload]
    })
  }

  @Action(RemoveTodo)
  removeTodo({ getState, patchState }: StateContext<TodoStateModel>, { payload }: RemoveTodo) {
    const state = getState();
    console.log('payload', payload);
    console.log('splice', state.todos.splice(payload, 1));
    patchState({
      todos: [...state.todos.splice(payload, 1)]
    })
  }

}
