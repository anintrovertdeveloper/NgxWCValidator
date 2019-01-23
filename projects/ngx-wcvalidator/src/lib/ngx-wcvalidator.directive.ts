import { AbstractControl, ValidatorFn } from "@angular/forms";

export function wordcountValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        var matches = control.value.match(/[\w\d\’\'-]+/gi);
        return matches && matches.length >= min && matches.length <= max ? null : {'error': true, 'errorMessage' : 'invalid'};
    };
  }