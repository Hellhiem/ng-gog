import { GameItem } from '../../types/GameItem';
import { createReducer, on } from '@ngrx/store';
import { loadGames, loadGamesFailure, loadGamesSuccess } from './games.actions';

export interface GamesState {
  games: GameItem[];
  loading: boolean;
  error: Error | null;
}

export const initialState: GamesState = {
  games: [],
  loading: false,
  error: null,
};

export const gamesReducer = createReducer(
  initialState,
  on(loadGames, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadGamesSuccess, (state, { games }) => ({
    ...state,
    games,
    loading: false,
  })),
  on(loadGamesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
