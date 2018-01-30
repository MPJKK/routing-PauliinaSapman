import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routeDirection'
})
export class RouteDirectionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
