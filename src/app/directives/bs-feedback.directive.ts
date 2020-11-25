import {Directive, DoCheck, ElementRef} from '@angular/core';
import {NgModel} from '@angular/forms';

@Directive({
  selector: '[bsFeedback]'
})
export class BsFeedbackDirective implements DoCheck {

  private inputFld: HTMLElement;

  constructor(private field: ElementRef<HTMLElement>, private ngModel: NgModel) { }

  ngDoCheck(): void {
    // Do nothing if untouched
    if (this.ngModel.untouched) { return; }

    this.inputFld = this.field.nativeElement;
    if (this.ngModel.valid) {
      this.inputFld.classList.add('is-valid');
      this.inputFld.classList.remove('is-invalid');
    } else {
      this.inputFld.classList.add('is-invalid');
      this.inputFld.classList.remove('is-valid');
    }
  }
}
