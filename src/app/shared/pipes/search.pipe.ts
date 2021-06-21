import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: IProduct[], args: string): IProduct[] | null {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(data => {
      let str: string = '';

      for (let item in data) {
        if (item != 'imgUrl' && item != 'id') {
          str += data[item];
        }
      }

      return str.toLowerCase().includes(args);
    });
  }

}
