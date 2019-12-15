import { Observable } from 'rxjs';
import { TodosListComponent } from '../app/todos-list/todos-list.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

export const defaultTodos = [
  { name: 'Todo 1' },
  { name: 'Todo 2' },
  { name: 'Todo 3' }
];

export const props = {
  todos$: new Observable(observer => { observer.next(defaultTodos) }),
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
        <todos-list [todos$]="todos$" (onRemoveTodo)="onRemoveTodo($event)"></todos-list>
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
