import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public isLoading = false;

  public login(email, password) {
    console.log('login', email, password);
  }

}
