import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CardMaterialModule } from './material.module';
import { CardsRouterModule } from './router.module';

import { PlayersComponent } from '../players/players.component';
import { HomeComponent } from '../home/home.component';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { MenuComponent } from '../menu/menu.component';
import { CardPersonComponent } from '../card-person/card-person.component';

const Components = [HomeComponent, PlayersComponent, MenuComponent, MenuListComponent, CardPersonComponent];

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, CardMaterialModule, CardsRouterModule, HttpModule],
    exports: [...Components],
    declarations: [...Components],
    providers: [],
})

export class CardsComponentsModule { }
