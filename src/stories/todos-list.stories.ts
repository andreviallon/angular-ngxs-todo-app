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

storiesOf('TodosList', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TodosListComponent]
    })
  ).add('with Todos', createComponent({
    todos$: [
      ...defaultTodos
    ],
    onRemoveTodo: action('Remove Todo'),
  }))
  .add('without Todos', createComponent({}))
  .add('loading Todos', createComponent({

  }))
