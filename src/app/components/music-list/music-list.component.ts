import { Song, SongsService } from './../../services/songs.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss'],
})
export class MusicListComponent implements OnInit {
  songs: Song[] = [];
  displayedColumns: string[] = ['id', 'title', 'artist'];
  activeRow: Song;
  audioPlayer: HTMLAudioElement;
  pause: boolean = false;
  currentSongIndex: number = 0;

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.songsService.getSongs().subscribe((res) => {
      this.songs = res;
      this.activeRow = this.songs[0];
      // this.onRowClick();
      // this.setActiveSong(this.songs[0]);
    });
  }

  onRowClick(song: Song) {
    this.pause = true;

    this.currentSongIndex = song.id - 1;
    this.setActiveSong(song);

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
    this.pause ? this.stop() : this.continue();
    this.pause = !this.pause;
  }

  setActiveSong(song: Song) {
    this.activeRow = song;
    this.audioPlayer = document.getElementById(
      'audioPlayer'
    ) as HTMLAudioElement;
  }
  prev() {
    console.log(this.currentSongIndex);
    if (this.currentSongIndex > 0) {
      this.currentSongIndex--;
    } else {
      this.currentSongIndex = this.songs.length - 1; // Loop to the last song if at the beginning
    }

    this.setActiveSong(this.songs[this.currentSongIndex]);
    this.audioPlayer.load();
    this.audioPlayer.play();
    this.pause = true;
  }

  next() {
    if (this.currentSongIndex < this.songs.length - 1) {
      this.currentSongIndex++;
    } else {
      this.currentSongIndex = 0; // Reset to the first song if it's at the end
    }

    this.setActiveSong(this.songs[this.currentSongIndex]);
    this.audioPlayer.load();
    this.audioPlayer.play();
    this.pause = true;
  }
}
