import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  showUser: boolean = false;
  showRegister: boolean = false;
  showLogin: boolean = false;
  showButtonLogin: boolean = true;
  showButtonRegister: boolean = true;
  isLogin: boolean = false;
  isOTPSendEvent2: boolean = false;

  onLoginSuccess(event: boolean): void {
    this.isLogin = event;
  }
  isOTPSendEvent(event: boolean): void {
    this.isOTPSendEvent2 = event;
  }

  showAdmin: boolean = false;



  toggleRegister(): void {
    this.showRegister = !this.showRegister;

  }
  toggleAdmin(): void {
    this.showAdmin = !this.showAdmin;

  }
}
