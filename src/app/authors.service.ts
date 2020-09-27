import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor() {}
  getAuthors() {
    return ['author_1', 'author_2', 'author_3'];
  }
}
