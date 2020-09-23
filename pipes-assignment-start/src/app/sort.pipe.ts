import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: [{name: string}]): [{name: string}] {
    //return value
     return value.sort((a,b)=>{
       if(a.name.substr(0,1) > b.name.substr(0,1))
       return -1
       else return 1
     })
  }

}
