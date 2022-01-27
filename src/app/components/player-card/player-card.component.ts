import { Component, Input, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { Player } from "src/app/interfaces/player.interface";
import { PlayersService } from "src/app/services/players.service";

@Component({
  selector: "app-player-card",
  templateUrl: "./player-card.component.html",
  styleUrls: ["./player-card.component.scss"],
})
export class PlayerCardComponent implements OnInit {
  @Input() player: Player;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  total = 0;

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {}

  add(event: MatChipInputEvent): void {
    const score = parseInt((event.value || "").trim());
    this.playersService.addScore(this.player, score);
    event.chipInput!.clear();

    this.total = this.playersService.getPlayerTotalScore(this.player);
  }

  remove(score: number): void {
    this.playersService.removeScore(this.player, score);
    this.total = this.playersService.getPlayerTotalScore(this.player);
  }
}
