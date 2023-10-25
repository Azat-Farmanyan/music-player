import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Song {
  id: number;
  title: string;
  artist: string;
  audioSource: string;
}

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor() {}
  private songs = new BehaviorSubject<Song[]>([
    {
      id: 1,
      title: 'Good Night',
      artist: 'FASSounds',
      audioSource: '../../../assets/songs/Good Night.mp3',
    },
    {
      id: 2,
      title: 'Glossy',
      artist: 'Coma-Media',
      audioSource: '../../../assets/songs/Glossy.mp3',
    },
    {
      id: 3,
      title: 'Once In Paris',
      artist: 'Pump up the mind',
      audioSource: '../../../assets/songs/Once In Paris.mp3',
    },
    {
      id: 4,
      title: 'Science Documentary',
      artist: 'Lexin_Music',
      audioSource: '../../../assets/songs/Science Documentary.mp3',
    },
  ]);

  getSongs() {
    return this.songs;
  }
}
