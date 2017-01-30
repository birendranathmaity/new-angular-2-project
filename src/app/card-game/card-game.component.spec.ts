import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { CardGameComponent  } from './card-game.component';

describe('CardGameComponent', () => {

  let comp:    CardGameComponent;
  let fixture: ComponentFixture<CardGameComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGameComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(CardGameComponent);

    comp = fixture.componentInstance; // CardGameComponent test instance

    // query for the message <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('no message in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display original message', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.message);
  });

  it('should display a different test message', () => {
    comp.message = 'this is berkedia unit test of card game';
    fixture.detectChanges();
    expect(el.textContent).toContain('this is berkedia unit test of card game');
  });
});
