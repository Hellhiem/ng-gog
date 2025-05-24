import { Component } from '@angular/core';
import { GameOfTheWeekComponent } from '../../components/game-of-the-week/game-of-the-week.component';
import { GameItemComponent } from '../../components/game-item/game-item.component';
import { GameItem } from '../../types/GameItem';
import { games } from '../../mocks/games';

@Component({
  selector: 'app-home',
  imports: [GameOfTheWeekComponent, GameItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  gameItems: GameItem[] = games;
}
