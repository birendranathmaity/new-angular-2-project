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

    it('should return an Observable<Array<deck_id>>',
        inject([DeckcardsService, MockBackend], (DeckcardsService, mockBackend) => {

        const mockResponse = {
                     remaining: 25;
                     deck_id: "fgfghf45hjjbnfj";
                     shuffled:true;
                     success:true;
}

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        DeckcardsService.startGame().subscribe((decks) => {
          expect(videos.length).toBe(4);
          expect(videos[0].name).toEqual('Video 0');
          expect(videos[1].name).toEqual('Video 1');
          expect(videos[2].name).toEqual('Video 2');
          expect(videos[3].name).toEqual('Video 3');
        });

    }));
  });
});
