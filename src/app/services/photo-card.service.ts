import { Injectable } from '@angular/core';
import { PhotoCard } from '../models/photo-cards';

@Injectable({
  providedIn: 'root',
})
export class PhotoCardService {
  private photoCards: PhotoCard[] = [
    new PhotoCard(
      1,
      'Anya',
      'Tirée de la série "Spy X Family"',
      'https://www.serieously.com/app/uploads/2022/05/anya-sourire_spyxfamily-600x0-c-default.jpg',
      new Date(),
      50
    ),
    new PhotoCard(
      2,
      'Bond',
      'Pet dAnya',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxtdRDMMPr84uhs_9QW1uRWdEKnkXdbL4YQ&s',
      new Date(),
      100
    ),
    new PhotoCard(
      3,
      'Yor',
      'Maman adoptive dAnya',
      'https://i.ytimg.com/vi/Z1mFD4YWbl0/maxresdefault.jpg',
      new Date(),
      150
    ),
    new PhotoCard(
      4,
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

  getPhotoCardById(id: number): PhotoCard {
    const photo = this.photoCards.find((photoCard) => photoCard.id === id);
    //Si pas de photo alors erreur
    if (!photo) {
      throw new Error("La photo n'existe pas");
    }
    return photo;
  }
}
