import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router'

export const appRoutes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }
]
