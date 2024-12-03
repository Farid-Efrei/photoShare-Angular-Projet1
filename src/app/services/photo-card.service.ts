import { Injectable } from '@angular/core';
import { PhotoCard } from '../models/photo-cards';

@Injectable({
  providedIn: 'root',
})
export class PhotoCardService {
  private photoCards: PhotoCard[] = [
    new PhotoCard(
      'Anya',
      'Tirée de la série "Spy X Family"',
      'https://www.serieously.com/app/uploads/2022/05/anya-sourire_spyxfamily-600x0-c-default.jpg',
      new Date(),
      50
    ),
    new PhotoCard(
      'Bond',
      'Pet dAnya',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxtdRDMMPr84uhs_9QW1uRWdEKnkXdbL4YQ&s',
      new Date(),
      100
    ),
    new PhotoCard(
      'Yor',
      'Maman adoptive dAnya',
      'https://i.ytimg.com/vi/Z1mFD4YWbl0/maxresdefault.jpg',
      new Date(),
      150
    ),
    new PhotoCard(
      'Loyd',
      'Papa adoptif dAnya',
      'https://www.japanfm.fr/wp-content/uploads/2022/06/spy-x-family-loid-parlant-a-yor-captivee.webp',
      new Date(),
      250
    ).withLocation('WISE'),
  ];

  getPhotoCards(): PhotoCard[] {
    return this.photoCards;
  }
}
