import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { BeersComponent } from './beers/beers.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RouterModule } from '@angular/router';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import {  HttpClientModule } from '@angular/common/http';
import { BeerFormComponent } from './beer-form/beer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    AboutComponent,
    BeersComponent,
    CarritoComponent,
    InputIntegerComponent,
    BeerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
