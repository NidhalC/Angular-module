import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  constructor() { }
  isHidden:boolean = true;

  handleClick(){
      this.isHidden = !this.isHidden;

  }
  myMouseOver(){
    console.log('mouse over');
  }
  myMouseOut(){
    console.log('mouse out');
  }

  ngOnInit() {
  }

}
