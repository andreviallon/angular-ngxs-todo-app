import { Todo } from '../models/todo.model';

export class InitState {
  static readonly type = '[TODO] InitState'
}

export class AddTodo {
  static readonly type = '[TODO] Add'

  constructor(public payload: Todo) { }
}

export class RemoveTodo {
  static readonly type = '[TODO] Remove'

  constructor(public payload: number) { }
}

export class CheckTodo {
  static readonly type = '[TODO] Check'

  constructor(public payload: number) { }
}
