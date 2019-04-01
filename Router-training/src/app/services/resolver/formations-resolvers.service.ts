import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FormationsResolversService implements Resolve<any>{

  constructor() { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return[{
      nom:'Module Angular',
      description: '',
    },
      {
        nom : 'Module JavaScript',
        description: '',
      },
      {
        nom:'Module TypeScript',
        description: '',
      }
    ]
  }

}
