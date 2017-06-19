import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from '../players/players.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
   { path: 'players', component: PlayersComponent },
   { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class CardsRouterModule { }
