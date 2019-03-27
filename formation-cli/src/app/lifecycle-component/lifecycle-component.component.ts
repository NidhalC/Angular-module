import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/Formation";

@Component({
  selector: 'app-lifecycle-component',
  templateUrl: './lifecycle-component.component.html',
  styleUrls: ['./lifecycle-component.component.css']
})
export class LifecycleComponentComponent implements OnInit {

  formation:Formation = new Formation('NOM_ANGULAR');

  constructor() { }

  ngOnInit() {
    setInterval(()=> {
      this.formation = new Formation(this.formation.nom === 'NOM_ANGULAR' ? 'NOM_JS': 'NOM_ANGULAR');
    }, 1000)
  }

}
