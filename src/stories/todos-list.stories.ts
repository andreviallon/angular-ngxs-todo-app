import { Observable } from 'rxjs';
import { TodosListComponent } from '../app/todos-list/todos-list.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

export const defaultTodos = [
  { name: 'Todo 1', checked: false },
  { name: 'Todo 2', checked: false },
  { name: 'Todo 3', checked: true }
];

export const props = {
  todos$: new Observable(observer => { observer.next(defaultTodos) }),
  onCheckTodo: action('Check Todo'),
  onRemoveTodo: action('Remove Todo')
}

export const withOutTodos = {
  todos$: new Observable(observer => { observer.next([]) }),
}

storiesOf('TodosList', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TodosListComponent]
    }),
  )
  .add('with Todos', () => {
    return {
      template: `
      <div style="padding-top: 2rem">
        <todos-list [todos$]="todos$" (onCheckTodo)="onCheckTodo($event)" (onRemoveTodo)="onRemoveTodo($event)"></todos-list>
      </div>
      `,
      props
    };
  })
  .add('without Todos', () => {
    return {
      template: `<todos-list [todos$]="todos$" (onRemoveTodo)="onRemoveTodo($event)"></todos-list>`,
      props: {
        ...withOutTodos
      }
    }
  });
