import { Injectable } from '@angular/core';
import {Formation} from "../model/Formation";
import {FormationApiService} from "./formation-api.service";

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  formations:Array<Formation>;

  constructor(private apiFormation:FormationApiService) { }



  async getListFormations():Promise<Array<Formation>>{
    this.formations = await this.apiFormation.fetchFormation();
    return this.formations;

  }
}
