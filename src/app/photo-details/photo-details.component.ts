import { Component, Input, OnInit } from '@angular/core';
import { PhotoCard } from '../models/photo-cards';
import {
  CurrencyPipe,
  DatePipe,
  NgClass,
  NgStyle,
  UpperCasePipe,
} from '@angular/common';
import { PhotoCardService } from '../services/photo-card.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-photo-details',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './photo-details.component.html',
  styleUrl: './photo-details.component.scss',
})

// On copie les données de photo-card.component.ts
export class PhotoDetailsComponent implements OnInit {
  textLikeButton!: string;
  isLiked!: boolean;

  photoCard!: PhotoCard; // On enleve le @input car on ne prend plus les données du parent. Mais on ajoute le service dans onInit;

  // On doit faire un constructeur pour appeler le service pour utiliser la méthode getPhotoCardById():
  constructor(
    private photoCardsService: PhotoCardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Pour récupérer l'id du path on doit utiliser l'activatedRoute qu'on charge aussi dans le cosntructeur puis on définit l'id :
    const id = +this.route.snapshot.params['id']; // On ajoute le + pour convertir l'id qui est un string en number car l'id est défini en nb.
    this.photoCard = this.photoCardsService.getPhotoCardById(id);
    this.isLiked = false;
    this.textLikeButton = '👍 LIKE';
  }
  onAddLike(): void {
    if (this.isLiked) {
      this.textLikeButton = '👍 LIKE';
      this.photoCard.like--;
      this.isLiked = false;
    } else {
      this.textLikeButton = ' 👎UNLIKE';
      this.photoCard.like++;
      this.isLiked = true;
    }
  }
}
