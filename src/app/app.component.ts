import { FavoritChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = {
    title: 'hello-world',
    isFavorite: true,
  };
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true,
  };

  onFavoriteChange(eventArgs: FavoritChangedEventArgs) {
    console.log('Favorite Changed:', eventArgs);
  }
}
