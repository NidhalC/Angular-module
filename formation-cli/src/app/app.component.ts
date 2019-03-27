import { Component } from '@angular/core';
import {Formation} from "./model/Formation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formation-cli';

  dateDebut = new Date(2019, 0, 29);
  dateFin = new Date(2019, 3, 17);

  formations:Array<Formation>=[ new Formation('Flotter', 'devellopement mobile', this.dateDebut, this.dateFin, 5000)] ;

  handleFormationSelected(formation){
    alert(formation.nom);
  }
}
