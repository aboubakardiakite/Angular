import { Component } from '@angular/core';
import { Cocktails } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent {
  cocktails: Cocktails[] = [
    {
      name: 'Mojiro',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito-2.jpg',
      description:
        'Ce cocktail cubain à base de rhum, dont la réputation n’est plus à faire, est assez facile à préparer et est toujours apprécié. Délectez-vous de sa fraîcheur et de ses arômes de menthe et de citron vert… Vous ravirez les papilles de vos convives à coup sûr lors de vos soirées ou apéritifs !',
    },
    {
      name: 'Margarita',
      img: 'https://cdn.shopify.com/s/files/1/0247/4681/9693/files/Margarita_Popular_Classic_Cocktail_large.jpg?v=1591992115',
      description:
        'Le cocktail Margarita classique a été l’un des cocktails les plus populaires en Amérique pendant des années et reste toujours un des premiers choix des clients. Bien qu’il existe de nombreuses variantes, la recette traditionnelle se compose de Tequila, Triple Sec et jus de citron vert. Il est également souvent servi avec un rebord de sel pour un parfait équilibre entre sucré, acide et salé.',
    },
    {
      name: 'Daiquiri',
      img: 'https://cdn.shopify.com/s/files/1/0247/4681/9693/files/Daiquiri_Summer_Cocktail_8a2a0474-bf6e-40db-80a5-e6e6d5a5a7e8_large.jpg?v=1591992228',
      description:
        'Quand vous pensez au Daiquiri, votre esprit voyage vers les plages de sable blanc de Cuba surplombées par un ciel bleu clair. Bien qu’il puisse sembler un cocktail parmi les plus adaptés à une escapade tropicale, le Daiquiri est en fait le cocktail au rhum le plus commandé dans les pubs et les bars du monde entier ',
    },
  ];
}
