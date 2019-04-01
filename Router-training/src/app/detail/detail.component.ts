import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {PATH_DETAIL_FORMATION,PATH_DETAIL_CONNAISSANCE, PATH_DETAIL} from "../app.routes.constantes";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  idDetail =1 ;
  idFormation:number = 1;
  idConnaissance:number = 2;

  constructor(private route: ActivatedRoute, private  router : Router) { }

  navigateToFormation(){
    this.router.navigate([PATH_DETAIL, this.idDetail, PATH_DETAIL_FORMATION, this.idFormation]);
  }

  navigateToConnaissance(){
    this.router.navigate([PATH_DETAIL, this.idDetail, PATH_DETAIL_CONNAISSANCE,this.idConnaissance]);
  }


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>{
      params.get('idDetail');
    });
    this.router.events.subscribe(event =>{
      console.log('EVENT_DETAIL', event);
    });
  }

}
