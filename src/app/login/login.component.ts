// login.component.ts

import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  isOTPSend: boolean = false;
  reponseidLogin: string = '';
  @Output() loginSuccess = new EventEmitter<boolean>()
  otp: string = '';
  constructor(private http: HttpClient) { }

  onSubmit(): void {
    // Vérification des champs username et password avant d'envoyer la requête
    if (this.username && this.password) {
      const loginData = {
        user: this.username,
        password: this.password
      };


      // Envoi de la requête POST vers l'URL fournie
      this.http.post<any>('https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/webservice/CRM/index.php', loginData)
        .subscribe(
          response => {
            this.isOTPSend = true;
            this.reponseidLogin = response;
            console.log(response);





          },
          error => {
            console.error(error); // Affichage de l'erreur dans la console
            this.loginError = 'Erreur lors de la connexion. Veuillez réessayer.'; // Message d'erreur pour l'utilisateur
          }
        );
    } else {
      this.loginError = 'Veuillez remplir tous les champs.'; // Message si les champs ne sont pas remplis
    }
  } SendOTP() {
    const Data = {
      idLogin: this.reponseidLogin, // Assure-toi que reponseidLogin contient l'idLogin correct
      otp: this.otp
    };

    this.http.post<any>('https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/webservice/CRM/testOTP.php', Data)
      .subscribe(
        response => {
          this.loginSuccess.emit(true);
          console.log(response);
        },
        error => {
          console.error(error);
          this.loginError = 'Erreur lors de la connexion. Veuillez réessayer.';
        }
      );
  }
}
