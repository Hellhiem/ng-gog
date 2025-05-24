import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameItem } from '../../types/GameItem';

@Injectable({ providedIn: 'root' })
export class GameStoreService {
  private gamesSubject = new BehaviorSubject<GameItem[]>([]);
  games$ = this.gamesSubject.asObservable();

  addGame(game: GameItem) {
    const games = this.gamesSubject.value;
    this.gamesSubject.next([...games, game]);
  }

  removeGame(id: number) {
    const games = this.gamesSubject.value.filter(g => g.id !== id);
    this.gamesSubject.next(games);
  }

  getGames(): Observable<GameItem[]> {
    return this.games$;
  }

  clearStore() {
    this.gamesSubject.next([]);
  }
}
