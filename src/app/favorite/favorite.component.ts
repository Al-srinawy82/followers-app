import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') changeOne = new EventEmitter();
  title: string;

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.changeOne.emit({ newValue: this.isFavorite });
  }
}

export interface FavoritChangedEventArgs {
  newVaule: boolean;
}
