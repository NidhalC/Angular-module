import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DetailComponent} from "./detail/detail.component";
import {PATH_HOME, PATH_DETAIL,PATH_DETAIL_FORMATION,PATH_DETAIL_CONNAISSANCE} from './app.routes.constantes';
import {ConnaissancesComponent} from "./connaissances/connaissances.component";
import {FormationsComponent} from "./formations/formations.component";
import {LoggedInGuardService} from "./services/guard/logged-in-guard.service";
import {FormationsResolversService} from "./services/resolver/formations-resolvers.service";

export const ROUTES: Routes = [
  {path: PATH_HOME, component:HomeComponent},
  {path: `${PATH_DETAIL}/:idDetail`,
    component:DetailComponent,
    children : [
      { path: '', pathMatch: 'full', redirectTo: PATH_DETAIL_FORMATION },
      {path: `${PATH_DETAIL_FORMATION}/:idFormation`, component:FormationsComponent, resolve:{formations:FormationsResolversService} },
      {path:`${PATH_DETAIL_CONNAISSANCE}/:idConnaissance`, component:ConnaissancesComponent, canActivate:[LoggedInGuardService]},
    ]
  }
];
