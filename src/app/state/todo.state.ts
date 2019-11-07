import { State, Action, StateContext, Selector } from '@ngxs/store';;
import { Todo, PriorityEmun } from './../models/todo.model';
import { AddTodo, RemoveTodo } from '../actions/todo.actions';

export class TodoStateModel {
  todos: Todo[]
}

@State<TodoStateModel>({
  name: 'todos',
  defaults: {
    todos: [
      {
        name: 'todo',
        category: 'home',
        priority: PriorityEmun.SMALL
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
  addTodo({ getState, patchState }: StateContext<TodoStateModel>, { payload }: AddTodo) {
    patchState({
      todos: [...getState().todos, payload]
    })
  }

  @Action(AddTodo)
  removeTodo({ getState, patchState }: StateContext<TodoStateModel>, { payload }: RemoveTodo) {
    patchState({
      todos: [...getState().todos.splice(payload, 1)]
    })
  }

}
