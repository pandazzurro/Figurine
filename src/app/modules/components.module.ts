import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CardMaterialModule } from './material.module';
import { CardsRouterModule } from './router.module';

import { CardMoneyComponent } from '../card-money/card-money.component';
import { PlayerComponent } from '../player/player.component';
import { HomeComponent } from '../home/home.component';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
    imports: [CardMaterialModule, CardsRouterModule, HttpModule],
    exports: [CardMoneyComponent, HomeComponent, PlayerComponent, MenuComponent, MenuListComponent],
    declarations: [CardMoneyComponent, HomeComponent, PlayerComponent, MenuComponent, MenuListComponent],
    providers: [],
})

export class CardsComponentsModule { }
