import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {DeckcardsService} from './deckcards.service';
describe('Service: DeckcardsService', () => {
  let service;
  
  //setup
  beforeEachProviders(() => [
    HTTP_PROVIDERS, 
    DeckcardsService
  ]);
  
  beforeEach(inject([DeckcardsService], s => {
    service = s;
  }));
  
  //specs
  it('should return available cards', done => {
    service.get().subscribe(x => { 
      expect(x).toContain('en');
      expect(x).toContain('es');
      expect(x).toContain('fr');
      expect(x.length).toEqual(3);
      done();
    });
  });
}) 

