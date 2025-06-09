import { createAction, props } from '@ngrx/store';
import { GamesActionTypes } from './games-action-types';
import { GameItem } from '../../types/GameItem';

export const loadGames = createAction(GamesActionTypes.LOAD_GAMES);
export const loadGamesSuccess = createAction(GamesActionTypes.LOAD_GAMES_SUCCESS, props<{ games: GameItem[] }>());
export const loadGamesFailure = createAction(GamesActionTypes.LOAD_GAMES_FAILURE, props<{ error: Error }>());
