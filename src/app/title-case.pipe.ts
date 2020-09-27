import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): unknown {
    if (!value) return null;
    let prepositions = ['of', 'the'];
    let words = value.split(' ');
    for (var i = 0; i < words.length; i++) {
      if (prepositions.includes(words[i]))
        words[i] = words[i].toLocaleLowerCase();
      else {
        words[i] =
          words[i].substr(0, 1).toLocaleUpperCase() +
          words[i].substr(1).toLocaleUpperCase();
      }
    }
    return words.join(' ');
  }
}
