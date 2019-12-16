import { State, Action, StateContext, Selector } from '@ngxs/store';;
import { Todo } from './../models/todo.model';
import { AddTodo, RemoveTodo, CheckTodo } from '../actions/todo.actions';

export class TodoStateModel {
  todos: Todo[]
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: [
      {
        name: 'Todo 1',
        checked: false
      },
      {
        name: 'Todo 2',
        checked: true
      },
      {
        name: 'Todo 3',
        checked: false
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

    patchState({
      todos: [...state.todos, payload]
    })
  }

  @Action(RemoveTodo)
  removeTodo({ getState, patchState }: StateContext<TodoStateModel>, { payload }: RemoveTodo) {
    const state = getState();
    state.todos.splice(payload, 1);

    patchState({
      todos: [...state.todos]
    })
  }

  @Action(CheckTodo)
  checkTodo({ getState, patchState }: StateContext<TodoStateModel>, { payload }: CheckTodo) {
    const state = getState();
    state.todos[payload].checked = !state.todos[payload].checked;

    patchState({
      todos: [...state.todos]
    })
  }

}
