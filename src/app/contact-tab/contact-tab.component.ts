import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-tab',
  templateUrl: './contact-tab.component.html',
  styleUrls: ['./contact-tab.component.css']
})
export class ContactTabComponent implements OnInit {

  contacts: any[] = [];
  contactss: any[] = [];
  columns: string[] = ['nom', 'prenom', 'Telephone', 'Email', 'Adresse', 'DateInscription', 'TotalAchats', 'LastDateAchat'];
  onRowClick(row: any): void {
    // Utilise row pour récupérer les données de la ligne sélectionnée
    console.log('Données de la ligne sélectionnée :', row);
    // Fais quelque chose avec les données récupérées, comme les stocker dans une variable ou effectuer une action
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.http.post<any[]>("https://lorenzo-geano-etu.pedaweb.univ-amu.fr/extranet/webservice/CRM/Contact.php", this.contactss)
      .subscribe(
        data => {
          this.contacts = data;
        },
        error => {
          console.error(error);
        }
      );
  }
}
