import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameItem } from '../../types/GameItem';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private http = inject(HttpClient);

  fetchGames(): Observable<GameItem[]> {
    return this.http.get<GameItem[]>('http://localhost:3000/games');
  }
}
