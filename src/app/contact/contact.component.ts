// contact.model.ts (Modèle pour les contacts)
export interface Contact {
  nom: string;
  prenom: string;
  Telephone: string;
  Email: string;
  Adresse: string;

}
// Importe le module HttpClient dans le composant
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  newContact: Contact = {
    nom: '',
    prenom: '',
    Telephone: '',
    Email: '',
    Adresse: ''

  };

  constructor(private http: HttpClient) { } // Injecte le service HttpClient

  onSubmit(): void {
    // Envoie les données à l'API addContact.php
    this.http.post<any>('https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/webservice/CRM/addContact.php', this.newContact)
      .subscribe(response => {
        alert("Client Ajouté");

      }, error => {
        // En cas d'erreur lors de la requête
        alert(error)
        // Gère ici les erreurs de la requête
      });
  }
}
