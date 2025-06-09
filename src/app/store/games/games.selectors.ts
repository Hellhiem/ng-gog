import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GamesState } from './games.reducer';

export const selectGamesState = createFeatureSelector<GamesState>('games');

export const selectGames = createSelector(selectGamesState, state => state.games);

export const selectGamesLoading = createSelector(selectGamesState, state => state.loading);

export const selectGamesError = createSelector(selectGamesState, state => !!state.error);
