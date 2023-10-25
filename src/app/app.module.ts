import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [AppComponent, MusicListComponent, PlayerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
