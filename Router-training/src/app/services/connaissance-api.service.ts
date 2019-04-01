import { Injectable } from '@angular/core';
import {Connaissances} from "../model/Connaissances";


@Injectable({
  providedIn: 'root'
})
export class ConnaissanceApiService {

  constructor() { }

  fetchListConnaissance():Promise<Array<Connaissances>>{
    return new Promise((resolve => {
      setTimeout(()=>{
        resolve([
         new Connaissances('Front-end', 10),
          new Connaissances('Back-end'),
          new Connaissances('securité')
        ])
      },2000);
    }));

  }}

