import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/Formation'

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  prenom: string = 'Nidhal';
  nom: string = 'Chouaref';

  getFullName(){
    return this.prenom + this.nom;
  }

  formation:Formation = new Formation('Module Angular', 'formation pour des non initié');
  formationJs:Formation ;

  isRed:string = 'red';

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
    this.formationJs = new Formation('Module JavaScript','Formation de Nico');
  }, 10000)

    setInterval(()=>{
      if (this.isRed == 'red'){
        this.isRed = 'green'
      } else {
        this.isRed = 'red'
      }
    },2000)
  }

}
