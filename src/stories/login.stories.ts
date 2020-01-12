import { action } from '@storybook/addon-actions';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { LoginComponent } from './../app/login/login.component';

function createComponent(props) {
  return () => ({
    component: LoginComponent,
    props
  });
}

storiesOf('Login', module)
  .addDecorator(
    moduleMetadata({
      declarations: [LoginComponent]
    })
  ).add('default', createComponent({
    login: action('Login')
  }));
