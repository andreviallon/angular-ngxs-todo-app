import { AddTodoComponent } from './../app/add-todo/add-todo.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

function createComponent(props) {
  return () => ({
    component: AddTodoComponent,
    props
  });
}

storiesOf('AddTodo', module)
  .addDecorator(
    moduleMetadata({
      declarations: [AddTodoComponent]
    })
  ).add('default', createComponent({
    onAddTodo: action('Add Todo'),
  }));
