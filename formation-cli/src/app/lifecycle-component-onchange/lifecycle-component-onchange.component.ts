import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Formation} from "../model/Formation";

@Component({
  selector: 'app-lifecycle-component-onchange',
  templateUrl: './lifecycle-component-onchange.component.html',
  styleUrls: ['./lifecycle-component-onchange.component.css']
})
export class LifecycleComponentOnchangeComponent implements OnInit, OnChanges {
  @Input()
  formation:Formation

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(change: SimpleChanges): void {
    const f = change['formation'];
    if(f.previousValue){
      console.log('previousValue : ${f.previousValue.nom}');
    }
    console.log('Current: ${f.currentValue.nom}');
  }

}
