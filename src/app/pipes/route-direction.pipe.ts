import { Pipe, PipeTransform } from '@angular/core';
import {pipe} from 'rxjs/util/pipe';

@Pipe({
  name: 'routeDirection',
})

export class RouteDirectionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 0) {
      return 'Going to ';
    } else {
      return 'Comming from ';
    }
  }
}


