import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PATH_HOME, PATH_DETAIL, PATH_FORMULAIRE} from "./app.routes.constantes";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Router-training';
  idDetail:number = 1 ;

  constructor(private  router : Router){}

  navigateToHome(){
    this.router.navigate([PATH_HOME]);
  }

  navigateToDetail(){
    this.router.navigate([PATH_DETAIL, this.idDetail]);
  }
  navigateToFormulaire(){
    this.router.navigate([PATH_FORMULAIRE]);
  }
  ngOnInit(): void {
    // this.router.events.subscribe((event)=>{
    //   console.log ('EVENTS', event);
    // })
  }

}
