import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";

import { AddPlayersComponent } from "./components/add-players/add-players.component";

@NgModule({
  declarations: [AppComponent, AddPlayersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
