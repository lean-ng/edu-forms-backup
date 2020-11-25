import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

export function matchValue(other: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null =>  {
    const otherControl: AbstractControl = control.parent.get(other);
    const matches = control.value === otherControl.value;
    return matches ? null : { match: true };
  };
}

@Directive({
  selector: '[match]',
  providers: [{provide: NG_VALIDATORS, useExisting: MatchDirective, multi: true}]
})
export class MatchDirective implements Validator {

  @Input('match')
  otherControl: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.otherControl ? matchValue(this.otherControl)(control)
      : null;
  }

}
