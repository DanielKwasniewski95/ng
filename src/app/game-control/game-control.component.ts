import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  private gameDuration: number = 0;
  private intervalId;
  @Output() private gameDurationChangeEvent = new EventEmitter<number>();
  constructor() {
    
  }

  onStartGame() {
    this.intervalId = setInterval(() => {
      this.gameDuration++;
      this.gameDurationChangeEvent.emit(this.gameDuration);
    }, 1000);
  }

  onStopGame() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
