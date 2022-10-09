import { ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable, fromEvent, merge } from 'rxjs';

import {
  GenericValidator,
  DisplayMessage,
  ValidationMessage,
} from '@app/utils/generic-form-validation';

export abstract class FormBaseComponent {
  displayMessage: DisplayMessage = {};
  genericValidator!: GenericValidator;
  validationMessages!: ValidationMessage;

  changesNotSave: boolean = false;

  protected configMessagesValidationBase(
    validationMessages: ValidationMessage
  ) {
    this.genericValidator = new GenericValidator(validationMessages);
  }

  protected configValidationFormBase(
    formInputElements: ElementRef[],
    formGroup: FormGroup
  ) {
    let controlBlurs: Observable<any>[] = formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(...controlBlurs).subscribe(() => this.validationForm(formGroup));
  }

  protected validationForm(formGroup: FormGroup) {
    this.displayMessage = this.genericValidator.processesMessages(formGroup);
    this.changesNotSave = true;
  }
}
