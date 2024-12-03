import { Component, OnInit } from '@angular/core';
import { PhotoCard } from '../models/photo-cards';
import { PhotoCardComponent } from '../photo-card/photo-card.component';
import { PhotoCardService } from '../services/photo-card.service';

@Component({
  selector: 'app-photo-liste',
  imports: [PhotoCardComponent],
  templateUrl: './photo-liste.component.html',
  styleUrl: './photo-liste.component.scss',
})
export class PhotoListeComponent implements OnInit {
  myPhotoCard!: PhotoCard;
  myOtherPhotoCard!: PhotoCard;
  myLastPhotoCard!: PhotoCard;
  photoCards!: PhotoCard[];

  constructor(private photoCardsService: PhotoCardService) {}
  ngOnInit(): void {
    this.photoCards = this.photoCardsService.getPhotoCards();
  }
}
