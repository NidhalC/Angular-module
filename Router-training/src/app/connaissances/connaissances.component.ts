import { Component, OnInit } from '@angular/core';
import {ConnaissanceService} from "../services/connaissance-service";
import {Connaissances} from "../model/Connaissances";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {

  connaissances:Array<Connaissances>;
  constructor(private connaissanceService: ConnaissanceService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.connaissanceService.getListConnaissance().then((data)=>{
      console.log(this.connaissances);
      this.connaissances = data;
    });
    this.route.paramMap.subscribe((params: ParamMap) =>{
      params.get('idConnaissance');
    });
  }

}
