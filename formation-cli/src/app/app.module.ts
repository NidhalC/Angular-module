import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { EvenementComponent } from './evenement/evenement.component';
import { VariableComponent } from './variable/variable.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { FormationItemComponent } from './formation-item/formation-item.component';
import { LifecycleComponentComponent } from './lifecycle-component/lifecycle-component.component';
import { LifecycleComponentOnchangeComponent } from './lifecycle-component-onchange/lifecycle-component-onchange.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    InterpolateComponent,
    EvenementComponent,
    VariableComponent,
    IfComponent,
    ForComponent,
    FormationItemComponent,
    LifecycleComponentComponent,
    LifecycleComponentOnchangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
