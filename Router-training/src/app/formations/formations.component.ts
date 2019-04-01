import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/Formation";
import {FormationService} from "../services/formation-service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations:Array<Formation>;

  constructor(private formationService:FormationService, private route:ActivatedRoute) { }

  ngOnInit() {


    this.formationService.getListFormations().then((data)=>{
      this.formations = data
    });


    this.route.paramMap.subscribe((params: ParamMap) =>{
      params.get('idFormation');
    });

    this.route.data.subscribe(data => this.formations =  data['formations']);
  }

}
