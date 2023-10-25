import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicListComponent } from './components/music-list/music-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'player' },
  { path: 'player', component: MusicListComponent },
  { path: '**', redirectTo: 'player' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
