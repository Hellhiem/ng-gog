import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, delay, finalize, Observable, of } from 'rxjs';
import { GameItem } from '../../types/GameItem';
import { SubjectState } from '../../types/SubjectState';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private subjectState = new BehaviorSubject<SubjectState>({ isLoading: false, error: null });
  subjectState$ = this.subjectState.asObservable();

  constructor(private http: HttpClient) {}

  getGames(): Observable<GameItem[]> {
    this.setSubjectState({ isLoading: true, error: null });

    return this.http.get<GameItem[]>('http://localhost:3000/games').pipe(
      delay(1000),
      catchError(error => {
        this.setSubjectState({ isLoading: false, error });
        return of([]);
      }),
      finalize(() => {
        this.setSubjectState({ isLoading: false, error: null });
      })
    );
  }

  private setSubjectState(newState: Partial<SubjectState>) {
    this.subjectState.next({ ...this.subjectState.value, ...newState });
  }
}
