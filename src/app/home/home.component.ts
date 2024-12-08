import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  //Pour que le bouton puisse amener à la bonne route on a besoin d'importer le router depuis le constructeur pour faire la redirection:
  constructor(private router: Router) {}
  onContinue(): void {
    this.router.navigateByUrl('photos');
  }
}
