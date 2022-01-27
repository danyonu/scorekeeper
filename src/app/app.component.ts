import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  gameStatus = false;

  onGameStatusChange(): void {
    this.gameStatus = !this.gameStatus;
  }
}
