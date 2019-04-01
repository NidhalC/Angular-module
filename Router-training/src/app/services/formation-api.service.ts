import { Injectable } from '@angular/core';
import {Formation} from "../model/Formation";

@Injectable({
  providedIn: 'root'
})
export class FormationApiService {

  constructor() { }

  fetchFormation():Promise<Array<Formation>>{
    return new Promise((resolve => {
      setTimeout(()=>{
        resolve([
        new Formation('Angular'),
          new Formation('JAVA'),
          new Formation('JENKINS')
        ])
      },2000);
    }));

  }
}
