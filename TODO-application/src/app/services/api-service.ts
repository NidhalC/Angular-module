import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const BASE_URL:string = 'http://localhost:3000/todos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private htpp: HttpClient) { }

  getList(){
    return this.htpp.get('${BASE_URL}').toPromise();
  }
}
