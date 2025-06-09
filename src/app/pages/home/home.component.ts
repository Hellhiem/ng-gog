import { Component, inject, OnInit } from '@angular/core';
import { GameOfTheWeekComponent } from '../../components/game-of-the-week/game-of-the-week.component';
import { GameItemComponent } from '../../components/game-item/game-item.component';
import { GameItem } from '../../types/GameItem';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { TranslatePipe } from '@ngx-translate/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectGames, selectGamesError, selectGamesLoading } from '../../store/games/games.selectors';
import { loadGames } from '../../store/games/games.actions';

@Component({
  selector: 'app-home',
  imports: [GameOfTheWeekComponent, GameItemComponent, LoaderComponent, ErrorMessageComponent, TranslatePipe, SearchInputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private store = inject(Store);

  gameItems = this.store.selectSignal(selectGames);
  isLoading = this.store.selectSignal(selectGamesLoading);
  error = this.store.selectSignal(selectGamesError);

  searchedGame = new FormControl('');

  get filteredGameItems(): GameItem[] {
    const search = (this.searchedGame.value || '').toLowerCase();
    return this.gameItems().filter(game => game.title.toLowerCase().includes(search));
  }

  ngOnInit() {
    this.store.dispatch(loadGames());
  }
}
