import { TestBed, async, inject } from '@angular/core/testing';
import {
  BaseRequestOptions,
  HttpModule,
  Http,
  Response,
  ResponseOptions
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {DeckcardsService} from './deckcards.service';
//import { VIMEO_API_URL } from '../config';

describe('DeckcardsService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: VIMEO_API_URL, useValue: 'http://example.com' },
        DeckcardsService,
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions
      ]
    });
  });

  describe('startGame()', () => {

    it('should return an Observable<Array<decks>>',
        inject([DeckcardsService, MockBackend], (DeckcardsService, mockBackend) => {

        const mockResponse = {
                     remaining: 25;
                     deck_id: "3p40paa87x90";
                     shuffled:true;
                     success:true;
}

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        DeckcardsService.startGame().subscribe((decks) => {
        //  expect(decks.remaining).toEqual(20);
          expect(decks.deck_id).toEqual('3p40paa87x90');
         
        });

    }));
  });
});
