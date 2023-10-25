import { Song, SongsService } from './../../services/songs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss'],
})
export class MusicListComponent implements OnInit {
  songs: Song[] = [];
  displayedColumns: string[] = ['id', 'title', 'artist'];
  activeRow: Song; // Track the active row
  audioPlayer: HTMLAudioElement;
  pause: boolean = false;
  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.songsService.getSongs().subscribe((res) => {
      this.songs = res;
      this.activeRow = this.songs[0];
    });
  }

  onRowClick(song: Song) {
    this.pause = true;
    this.activeRow = song;

    this.audioPlayer = document.getElementById(
      'audioPlayer'
    ) as HTMLAudioElement;

    this.audioPlayer.load();
    this.audioPlayer.play();
  }

  stop() {
    this.audioPlayer.pause();
  }

  continue() {
    this.audioPlayer.play();
  }

  playPause() {
    console.log(this.audioPlayer);

    this.pause ? this.stop() : this.continue();
    this.pause = !this.pause;
  }
}
