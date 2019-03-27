import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/Formation";

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  formations:Array<Formation>=[];
  myColor(isFirst:boolean =false, isLast:boolean = false){
    return isFirst? 'red' : 'black' && isLast? 'green' : 'black' ;
  }
  dateDebut = new Date(2019, 0, 29);
  dateFin = new Date(2019, 3, 17);


  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular', null, this.dateDebut, this.dateFin),
      new Formation('Module JavaScript', null, null , null, 300),
      new Formation('Module TypeScript'),
      new Formation('Flotter', null, this.dateDebut, this.dateFin, 5000),
      new Formation('Agile/Scrum', null, null, this.dateFin),
    ]
  }

}
