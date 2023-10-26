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
    {
      id: 5,
      title: 'Inside You',
      artist: 'lemonmusicstudio',
      audioSource: '../../../assets/songs/inside-you.mp3',
    },
    {
      id: 6,
      title: 'The Best Jazz Club In New Orleans',
      artist: 'PaoloArgento',
      audioSource: '../../../assets/songs/the-best-jazz-club.mp3',
    },
    {
      id: 7,
      title: 'LoFi Chill (Medium Version)',
      artist: 'BoDleasons',
      audioSource: '../../../assets/songs/lofi-chill-medium-version.mp3',
    },
    {
      id: 8,
      title: 'Ambient Classical Guitar',
      artist: 'William_King',
      audioSource: '../../../assets/songs/ambient-classical-guitar.mp3',
    },
  ]);

  getSongs() {
    return this.songs;
  }
}
