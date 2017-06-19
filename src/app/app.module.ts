import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CardsComponentsModule } from './modules/components.module';
import { CardMaterialModule } from './modules/material.module';
import { CardsRouterModule } from './modules/router.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, HttpModule,
    CardsRouterModule, CardMaterialModule, CardsComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
