import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import { FormationsComponent } from './formations/formations.component';
import { ConnaissancesComponent } from './connaissances/connaissances.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TemplateComponent } from './template/template.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    FormationsComponent,
    ConnaissancesComponent,
    TemplateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
