import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(value: any, limit?: number): any {
    if (!value) return null;
    return value.substr(0, limit || 10) + ' ...'
  }

}
