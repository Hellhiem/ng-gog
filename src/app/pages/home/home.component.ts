import { Component } from '@angular/core';
import { GameOfTheWeekComponent } from '../../components/game-of-the-week/game-of-the-week.component';
import { GameItemComponent } from '../../components/game-item/game-item.component';
import { GameItem } from '../../types/GameItem';

@Component({
  selector: 'app-home',
  imports: [GameOfTheWeekComponent, GameItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  gameItems: GameItem[] = [
    {
      id: 1,
      title: "Oddworld: Stranger's Wrath",
      discount: 50,
      price: 9.99,
      imageSource: 'assets/osw-logo.png',
      owned: false,
    },
    {
      id: 2,
      title: 'Chaos on Deponia',
      discount: 50,
      price: 9.99,
      imageSource: 'assets/cod-logo.png',
      owned: true,
    },
    {
      id: 3,
      title: 'The Settlers 2: Gold Edition',
      price: 4.99,
      imageSource: 'assets/ts2-logo.png',
      owned: false,
    },
    {
      id: 4,
      title: 'Neverwinter Nights',
      discount: 50,
      price: 9.99,
      imageSource: 'assets/nn-logo.png',
      owned: false,
    },
    {
      id: 5,
      title: "Assassin's Creed: Director's Cut Edition",
      price: 6.99,
      imageSource: 'assets/ac-logo.png',
      owned: false,
    },
  ];
}
