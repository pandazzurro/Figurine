import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cg-card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.scss']
})
export class CardPersonComponent implements OnInit {
  @Input() Person: Person;
  @Output() History: EventEmitter<Person> = new EventEmitter<Person>();
  @Output() Market: EventEmitter<Person> = new EventEmitter<Person>();
  constructor() { }

  ngOnInit() {
    const a = this.Person;
  }
  getClassPersonType(value?: PersonType) {
    let result = null;
    result = result === null && value === PersonType.Coach ? 'coach' : null;
    result = result === null && value === PersonType.Soccer ? 'soccer' : null;
    return result;
  }
}

export enum PersonType {
  Coach,
  Soccer,
  Staff
}

export class Nation {
  Name: string;
  ShortName?: string;
  FlagUrl?: string;
}

export class League {
  Name: string;
  FlagUrl?: string;
}

export class Person {
  Name: string;
  Surname: string;
  NickName?: string;
  ActualTeam?: string;
  BirthDate?: Date;
  ImageUrl: string;
  PersonType?: PersonType = null;
  Biography: string;
  Retired = false;
  Nation?: Nation = null;
  League?: League = null;
  getAge() { // birthday is a date
    const ageDifMs = Date.now() - this.BirthDate.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

