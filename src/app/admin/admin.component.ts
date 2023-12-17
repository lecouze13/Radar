import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  showUser: boolean = false;
  showRegister: boolean = false;

  showButtonLogin: boolean = true;
  showButtonRegister: boolean = true;
  isLogin: boolean = false;


  onLoginSuccess(event: boolean): void {
    this.isLogin = event;
  }

  showAdmin: boolean = false;

  toggleList(): void {
    this.showUser = !this.showUser;
  }

  toggleRegister(): void {
    this.showRegister = !this.showRegister;

  }
  toggleAdmin(): void {
    this.showAdmin = !this.showAdmin;

  }
}
