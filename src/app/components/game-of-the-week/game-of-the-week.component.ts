import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-game-of-the-week',
  imports: [TranslatePipe, UpperCasePipe],
  templateUrl: './game-of-the-week.component.html',
  styleUrl: './game-of-the-week.component.scss',
})
export class GameOfTheWeekComponent {}
