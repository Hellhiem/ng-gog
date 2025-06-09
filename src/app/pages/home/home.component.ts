import { Component, inject, OnInit } from '@angular/core';
import { GameOfTheWeekComponent } from '../../components/game-of-the-week/game-of-the-week.component';
import { GameItemComponent } from '../../components/game-item/game-item.component';
import { GameItem } from '../../types/GameItem';
import { GamesService } from '../../services/games-service/games.service';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { TranslatePipe } from '@ngx-translate/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [GameOfTheWeekComponent, GameItemComponent, LoaderComponent, ErrorMessageComponent, TranslatePipe, SearchInputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private gamesService = inject(GamesService);
  gameItems: GameItem[] = [];
  filteredGameItems: GameItem[] = [];
  isLoading = false;
  error = false;
  searchedGame = new FormControl('');

  ngOnInit() {
    this.gamesService.getGames().subscribe(games => {
      this.gameItems = games;
      this.filterGames();
    });

    this.gamesService.subjectState$.subscribe(subjectState => {
      this.isLoading = subjectState.isLoading;
      this.error = !!subjectState.error;
    });

    this.searchedGame.valueChanges.subscribe(() => {
      this.filterGames();
    });
  }

  private filterGames() {
    const search = this.searchedGame.value?.toLowerCase() || '';

    this.filteredGameItems = this.gameItems.filter(game => game.title.toLowerCase().includes(search));
  }
}
