import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Formation} from "../model/Formation";

@Component({
  selector: 'app-formation-item',
  templateUrl: './formation-item.component.html',
  styleUrls: ['./formation-item.component.css']
})
export class FormationItemComponent implements OnInit {

  constructor() { }

  @Input()
  formation:Formation;

  @Output()
  formationSelected:EventEmitter<Formation> = new  EventEmitter<Formation>();

  selectFormation(){
    this.formationSelected.emit(this.formation);
  }



  ngOnInit() {

  }

}
