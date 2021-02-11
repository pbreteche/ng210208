import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class Validators {
    static alphanumeric(control: AbstractControl): ValidationErrors | null {
        // Letters + all latin charset
        // \u00D7 (×) and \u00f7 (÷) excluded
        if(!control.value.match(/^[A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]+$/)) {
            return { alphanumeric: {message: control.value + ' contains non alphanumeric chars'}}
        }

        return null;
    }

    // Use factory to pass parameters to validator function
    static min(int: number): ValidatorFn {
        return function(control: AbstractControl): ValidationErrors | null {
            if (control.value.length < int) {
                return { min: { 
                    message: control.value + ' is not long enough',
                    min: int
                }}
            }

            return null;
        }
    }
}