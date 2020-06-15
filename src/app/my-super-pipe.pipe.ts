import { Pipe, PipeTransform } from '@angular/core';
import { StringDecoder } from 'string_decoder';

@Pipe({
  name: 'mySuperPipe'
})
export class MySuperPipePipe implements PipeTransform {

  transform(value: string, arg: number): string {
    if (value.length !== arg){
      return '[INVALID ACCOUNT NUMBER]';
    }
    else{
      let returnString = value.substr(0, 4);
      returnString = returnString.padEnd(12, '*');
      return returnString;
      //  could have been return valuesubstr(0, 4).padEnd(12, '*'), but I wanted to test the var/let declaration
    }
  }
}
