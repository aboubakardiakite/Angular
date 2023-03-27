import { Component } from '@angular/core';
import { Cocktails } from './interfaces/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cocktails: Cocktails = {
    name: 'Mojiro',
    img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg',
    description:
      'Ce cocktail cubain à base de rhum, dont la réputation n’est plus à faire, est assez facile à préparer et est toujours apprécié. Délectez-vous de sa fraîcheur et de ses arômes de menthe et de citron vert… Vous ravirez les papilles de vos convives à coup sûr lors de vos soirées ou apéritifs !',
  };
}
