import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { Player } from "src/app/interfaces/player.interface";
import { PlayersService } from "src/app/services/players.service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent implements OnInit, OnDestroy {
  @Output() onGameStatusChange = new EventEmitter<boolean>();

  players: Player[] = [];
  private playersSubscription: Subscription;

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersSubscription = this.playersService.players$.subscribe(
      (players) => (this.players = players)
    );
  }

  ngOnDestroy(): void {
    this.playersSubscription.unsubscribe();
  }

  startNewGame(): void {
    this.playersService.resetPlayers();
    this.onGameStatusChange.emit();
  }
}
