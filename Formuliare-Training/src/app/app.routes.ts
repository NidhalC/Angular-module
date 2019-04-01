import {Routes} from "@angular/router";
import {PATH_FORMULAIRE, PATH_HOME} from "./app.routes.constantes";
import {HomeComponent} from "./home/home.component";
import {FormulaireComponent} from "./formulaire/formulaire.component";





export const ROUTES :Routes = [
  {path: PATH_HOME, component:HomeComponent},
  {path: PATH_FORMULAIRE, component:FormulaireComponent},


];
