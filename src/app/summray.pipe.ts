import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(vaule: string, limit?: number) {
    if (!vaule) return null;
    let actualLimit = limit ? limit : 80;
    return vaule.substring(0, actualLimit) + '...';
  }
}
