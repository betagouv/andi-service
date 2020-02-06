import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumber'
})
export class PhonenumberPipe implements PipeTransform {
  transform(val: string) {
    return (
      val.slice(0, 2) +
      ' ' +
      val.slice(2, 4) +
      ' ' +
      val.slice(4, 6) +
      ' ' +
      val.slice(6, 8) +
      ' ' +
      val.slice(8, 10)
    );
  }
}
