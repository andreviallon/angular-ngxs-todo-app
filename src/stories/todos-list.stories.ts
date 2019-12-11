import { TodosListComponent } from '../app/todos-list/todos-list.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

function createComponent(props) {
  return () => ({
    component: TodosListComponent,
    props
  });
}

export const defaultTodos = [
  'Todo 1',
  'Todo 2',
  'Todo 3'
];

export const props = {
  todos$: defaultTodos,
  onRemoveTodo: action('Remove Todo')
}

storiesOf('TodosList', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TodosListComponent]
    })
  )
  // .add('with Todos', createComponent({
  //   todos$: defaultTodos
  // }))
  .add('with Todos', () => {
    return {
      template: `<todos-list [todos$]="todos" (onRemoveTodo)="onRemoveTodo($event)"></todos-list>`,
      props
    };
  });
