import { Pipe, PipeTransform } from '@angular/core';

export enum EmailPart {
  Username,
  Host
}

@Pipe({
  name: 'emailPart'
})
export class EmailPartPipe implements PipeTransform {

  transform(value: string|void, part: EmailPart): string|void {
    if (!value) return;

    return value.split('@')[part];
  }

}
