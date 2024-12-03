import { Component, Input, OnInit } from '@angular/core';
import { PhotoCard } from '../models/photo-cards';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgStyle,
  PercentPipe,
  UpperCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-photo-card',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
  ],
  //standalone: true,
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss',
})
export class PhotoCardComponent implements OnInit {
  textLikeButton!: string;
  isLiked!: boolean;

  @Input() photoCard!: PhotoCard;

  ngOnInit(): void {
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
