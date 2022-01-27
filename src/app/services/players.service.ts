import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Player } from "../interfaces/player.interface";

@Injectable({
  providedIn: "root",
})
export class PlayersService {
  private playersList: Player[] = [];
  private players = new BehaviorSubject<Player[]>([]);
  players$ = this.players.asObservable();

  constructor() {}

  add(playerName: string) {
    if (playerName) {
      this.playersList = [...this.playersList, new Player(playerName)];
      this.players.next(this.playersList);
    }
  }

  remove(player: Player) {
    this.playersList = this.playersList.filter(
      (player) => player.name !== player.name
    );
    this.players.next(this.playersList);
  }

  addScore(player: Player, score: number) {
    if (!player || !score) return;

    this.playersList = this.playersList.map((pl: Player) => {
      if (pl.name === player.name) {
        pl.scores = [...pl.scores, score];
      }
      return pl;
    });

    this.players.next(this.playersList);
  }

  removeScore(player: Player, score: number) {
    if (!player || !score) return;

    this.playersList = this.playersList.map((pl: Player) => {
      if (pl.name === player.name) {
        const scoreIndex = pl.scores.indexOf(score);
        pl.scores.splice(scoreIndex, 1);
      }
      return pl;
    });

    this.players.next(this.playersList);
  }

  getPlayerTotalScore(player: Player): number {
    const total = this.playersList
      .find((pl) => pl.name === player.name)
      ?.scores.reduce((acc, score) => acc + score, 0);
    return total || 0;
  }

  resetPlayers(): void {
    this.playersList = [];
    this.players.next([]);
  }
}
