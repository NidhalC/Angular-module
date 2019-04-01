import { Injectable } from '@angular/core';
import {Connaissances} from "../model/Connaissances";
import {ConnaissanceApiService} from "./connaissance-api.service";

@Injectable({
  providedIn: 'root'
})
export class ConnaissanceService {
  connaissances:Array<Connaissances>;

  constructor(private apiConnaissance:ConnaissanceApiService) { }

  async getListConnaissance():Promise<Array<Connaissances>>{
    this.connaissances = await  this.apiConnaissance.fetchListConnaissance();
    return this.connaissances;
  }
}
