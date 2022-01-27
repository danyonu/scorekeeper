import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { Player } from "src/app/interfaces/player.interface";
import { PlayersService } from "src/app/services/players.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-add-players",
  templateUrl: "./add-players.component.html",
  styleUrls: ["./add-players.component.scss"],
})
export class AddPlayersComponent implements OnInit, OnDestroy {
  @Output() onGameStatusChange = new EventEmitter<boolean>();

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  players: Player[] = [];
  playersSubscription: Subscription;

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersSubscription = this.playersService.players$.subscribe(
      (players) => (this.players = players)
    );
  }

  ngOnDestroy(): void {
    this.playersSubscription.unsubscribe();
  }

  add(event: MatChipInputEvent): void {
    this.playersService.add((event.value || "").trim());
    event.chipInput!.clear();
  }

  remove(player: any): void {
    this.playersService.remove(player);
  }

  startGame(): void {
    this.onGameStatusChange.emit();
  }
}
