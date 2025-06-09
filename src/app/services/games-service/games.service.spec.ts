import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GamesService } from './games.service';
import { GameItem } from '../../types/GameItem';
import { games } from '../../mocks/games';

describe('GamesService', () => {
  let service: GamesService;
  let httpMock: HttpTestingController;
  const mockGames: GameItem[] = games;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GamesService],
    });
    service = TestBed.inject(GamesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch games from API', done => {
    service.fetchGames().subscribe(games => {
      expect(games).toEqual(mockGames);
      done();
    });

    const req = httpMock.expectOne('http://localhost:3000/games');
    expect(req.request.method).toBe('GET');
    req.flush(mockGames);
  });
});
