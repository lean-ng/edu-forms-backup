import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {UniqueAccountValidator} from './unique-account.validator';

@Directive({
  selector: '[uniqueAccount]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueAccountDirective, multi: true}]
})
export class UniqueAccountDirective implements AsyncValidator {

  constructor(private validatorSvc: UniqueAccountValidator) { }

  async validate(control: AbstractControl): Promise<ValidationErrors | null> {
    const validationResult = await this.validatorSvc.validate(control);
    if (validationResult) {
      // Todo: Set HTML5 validity
    }
    return validationResult;
  }
}
