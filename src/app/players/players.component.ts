import { Component, OnInit } from '@angular/core';
import { Person, PersonType } from 'app/card-person/card-person.component';

@Component({
  selector: 'cg-player',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  Person: Person = new Person();
  constructor() { }

  ngOnInit() {
    this.Person.ActualTeam = 'Nizza';
    this.Person.Biography = 'Giocatore italiano, attaccante, forte fisicamente';
    this.Person.BirthDate = new Date(1990, 8, 12);
    this.Person.ImageUrl = './assets/player/Balotelli.jpg';
    this.Person.League = { Name: 'League 1', FlagUrl : './assets/flag/Teams/Ligue1.png' };
    this.Person.Nation = { Name: 'Italia', FlagUrl : './assets/flag/Nations/Italia.svg', ShortName: 'ITA' };
    this.Person.Name = 'Mario';
    this.Person.NickName = 'Super Mario';
    this.Person.PersonType = PersonType.Soccer;
    this.Person.Surname = 'Balotelli';
  }
  show(player: Person) {
    const p = player;
  }
}
