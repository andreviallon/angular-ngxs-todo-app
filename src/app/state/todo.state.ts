import { InitState } from './../actions/todo.actions';
import { TodoService } from './../todo.service';
import { State, Action, StateContext, Selector } from '@ngxs/store';;
import { Todo } from './../models/todo.model';
import { AddTodo, RemoveTodo, CheckTodo } from '../actions/todo.actions';

export class TodoStateModel {
  todos: Todo[]
}

@State<TodoStateModel>({
  name: 'todos'
})

export class TodoState {

  constructor(private todoService: TodoService) { }

  @Selector()
  static getTodos(state: TodoStateModel) {
    return state.todos;
  }

  @Selector()
  static getCompletedTodos(state: TodoStateModel) {
    return state.todos.filter(todo => { todo.checked })
  }

  @Action(InitState)
  initState({ patchState }: StateContext<TodoStateModel>, { }: InitState) {
    const todos = this.todoService.getTodos();

    patchState({
      todos: todos
    })
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
