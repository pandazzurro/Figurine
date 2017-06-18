import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMoneyComponent } from './card-money.component';

describe('CardMoneyComponent', () => {
  let component: CardMoneyComponent;
  let fixture: ComponentFixture<CardMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
