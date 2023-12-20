import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements OnInit{
  
  constructor(private http: HttpClient) {}
 
  ngOnInit() {
    this.chargementMAP();
  }

  chargementMAP() {
    this.http.get<any>('http://127.0.0.1:5000/generate_map').subscribe(
      (data: any) => {
        document.open();
        document.write(data.map_html);
        
        document.close();

      },
      (error) => {
        console.error('Erreur lors de la récupération du code HTML :', error);
      }
    );
  }
}
