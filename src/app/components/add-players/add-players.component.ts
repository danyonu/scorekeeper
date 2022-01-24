import { Component, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";

@Component({
  selector: "app-add-players",
  templateUrl: "./add-players.component.html",
  styleUrls: ["./add-players.component.scss"],
})
export class AddPlayersComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: any[] = [{ name: "Lemon" }, { name: "Lime" }, { name: "Apple" }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || "").trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
