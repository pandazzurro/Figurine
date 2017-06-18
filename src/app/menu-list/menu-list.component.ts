import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cg-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menuData: MenuData;
  constructor() { }

  ngOnInit() {
    this.menuData = new MenuData();

    const cat1 = new Category();
    cat1.Name = 'Staff';
    const player = new Item();
    player.Icon = 'directions_run';
    player.Link = '/players';
    player.Name = 'Giocatori';
    player.Quantity = 1200;
    const staff = new Item();
    staff.Icon = 'transfer_within_a_station';
    staff.Link = '/staffs';
    staff.Name = 'Allenatori';
    staff.Quantity = 20;
    cat1.Items.push(player);
    cat1.Items.push(staff);
    this.menuData.Category.push(cat1);


    const cat2 = new Category();
    cat2.Name = 'Aggregazioni';
    const team = new Item();
    team.Icon = 'group';
    team.Link = '/teams';
    team.Name = 'Squadre';
    team.Quantity = 35;
    const league = new Item();
    league.Icon = 'format_list_numbered';
    league.Link = '/leagues';
    league.Name = 'Leghe';
    league.Quantity = 1;
    cat2.Items.push(team);
    cat2.Items.push(league);
    this.menuData.Category.push(cat2);
  }

}

export class Item {
  Name: string;
  Icon: string;
  Quantity: number;
  Link: string;
}
export class Category {
  Items: Item[] = [];
  Name: string;
}
export class MenuData {
  Category: Category[] = [];
}

