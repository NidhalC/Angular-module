import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PATH_FORMULAIRE} from "./app.routes.constantes";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements  OnInit{
  title = 'Formuliare-Training';


constructor(private router:Router) {}

  navigateToFormulaire(){
    this.router.navigate([PATH_FORMULAIRE]);
  }

  ngOnInit(): void {

  }

}
