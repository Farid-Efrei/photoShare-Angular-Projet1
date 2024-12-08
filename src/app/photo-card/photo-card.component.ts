import { Component, Input } from '@angular/core';
import { PhotoCard } from '../models/photo-cards';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-card',
  imports: [UpperCasePipe],
  //standalone: true,
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss',
})
export class PhotoCardComponent {
  @Input() photoCard!: PhotoCard;

  constructor(private router: Router) {}

  onDetails(): void {
    this.router.navigateByUrl(`photos/${this.photoCard.id}`);
  }
}
