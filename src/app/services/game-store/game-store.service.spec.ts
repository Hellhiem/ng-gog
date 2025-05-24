import { TestBed } from '@angular/core/testing';
import { GameStoreService } from './game-store.service';
import { GameItem } from '../../types/GameItem';
import { games } from '../../mocks/games';

describe('GameStoreService', () => {
  let service: GameStoreService;
  const mockGame1: GameItem = games[0];
  const mockGame2: GameItem = games[1];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameStoreService);
    service.clearStore();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a game', done => {
    service.addGame(mockGame1);
    service.getGames().subscribe(games => {
      expect(games).toContain(mockGame1);
      done();
    });
  });

  it('should remove a game by id', done => {
    service.addGame(mockGame1);
    service.addGame(mockGame2);
    service.removeGame(mockGame1.id);
    service.getGames().subscribe(games => {
      expect(games).not.toContain(mockGame1);
      expect(games).toContain(mockGame2);
      done();
    });
  });

  it('should clear the store', done => {
    service.addGame(mockGame1);
    service.clearStore();
    service.getGames().subscribe(games => {
      expect(games.length).toBe(0);
      done();
    });
  });

  it('should return all added games', done => {
    service.addGame(mockGame1);
    service.addGame(mockGame2);
    service.getGames().subscribe(games => {
      expect(games).toEqual([mockGame1, mockGame2]);
      done();
    });
  });
});
