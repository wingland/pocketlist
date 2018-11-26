import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotchatPage } from './botchat.page';

describe('BotchatPage', () => {
  let component: BotchatPage;
  let fixture: ComponentFixture<BotchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotchatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
