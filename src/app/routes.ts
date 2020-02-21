import { Routes } from '@angular/router'
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';

export const appRoutes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'completed', component: CompletedTodosComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }
]
