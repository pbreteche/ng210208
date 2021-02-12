import { Validators } from './validators';
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appMinValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true }
  ]
})
export class MinValidatorDirective implements Validator {
  @Input('appMinValidator') int: string = '0';

  validate(control: AbstractControl): ValidationErrors | null {
    return Validators.min(+this.int)(control);
  }

}
