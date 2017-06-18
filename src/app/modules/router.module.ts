import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from '../player/player.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
   { path: 'players', component: PlayerComponent },
   { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class CardsRouterModule { }
