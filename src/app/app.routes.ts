import { Routes } from '@angular/router';
import { PhotoListeComponent } from './photo-liste/photo-liste.component';
import { HomeComponent } from './home/home.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';

export const routes: Routes = [
  {
    path: 'photos',
    component: PhotoListeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  // pour ajouter le détail de chaque photos on utilisera l'id pour la redirection: route donc dynamique. On ajoute donc les id au niveau du model d'abord puiss du service;
  {
    path: 'photos/:id',
    component: PhotoDetailsComponent,
  },
];
