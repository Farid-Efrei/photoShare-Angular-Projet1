import { Routes } from '@angular/router';
import { PhotoListeComponent } from './photo-liste/photo-liste.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'photos',
    component: PhotoListeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
