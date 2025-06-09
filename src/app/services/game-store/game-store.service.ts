import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameItem } from '../../types/GameItem';

const STORAGE_KEY = 'cartGames';

@Injectable({ providedIn: 'root' })
export class GameStoreService {
  private gamesSubject = new BehaviorSubject<GameItem[]>(this.loadFromStorage());
  games$ = this.gamesSubject.asObservable();

  addGame(game: GameItem) {
    const games = this.gamesSubject.value;
    const updatedGames = [...games, game];
    this.gamesSubject.next(updatedGames);
    this.saveToStorage(updatedGames);
  }

  removeGame(id: number) {
    const updatedGames = this.gamesSubject.value.filter(g => g.id !== id);
    this.gamesSubject.next(updatedGames);
    this.saveToStorage(updatedGames);
  }

  getGames(): Observable<GameItem[]> {
    return this.games$;
  }

  clearStore() {
    this.gamesSubject.next([]);
    this.saveToStorage([]);
  }

  private loadFromStorage(): GameItem[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage(games: GameItem[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
  }
}
