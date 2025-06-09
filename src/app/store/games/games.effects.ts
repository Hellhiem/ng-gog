import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GamesService } from '../../services/games-service/games.service';
import { loadGames, loadGamesSuccess, loadGamesFailure } from './games.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GamesEffects {
  private actions$ = inject(Actions);
  private gamesService = inject(GamesService);

  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGames),
      mergeMap(() =>
        this.gamesService.fetchGames().pipe(
          map(games => loadGamesSuccess({ games })),
          catchError(error => of(loadGamesFailure({ error })))
        )
      )
    )
  );
}
