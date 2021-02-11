import { Validators } from './validators';
import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appAlphanumericValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: AlphanumericValidatorDirective, multi: true }
  ]
})
export class AlphanumericValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return Validators.alphanumeric(control);
  }

}
