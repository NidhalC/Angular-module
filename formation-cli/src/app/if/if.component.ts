import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/Formation";

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  isDisplay:boolean = true;
  isHidden :boolean = true;

  formation:Formation = new Formation('Programmation', 'module pour les enfants qui souhaitent programmer')

  myClick(){
    this.isHidden =! this.isHidden;
  }
  constructor() { }

  ngOnInit() {

  }

}
