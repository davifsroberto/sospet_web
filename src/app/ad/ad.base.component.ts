import { Component, ElementRef, ViewChildren } from '@angular/core';
import { FormGroup, FormControlName } from '@angular/forms';

import { FormBaseComponent } from '../shared/components/base-components/form-base.component';

@Component({ template: '' })
export class AdBaseComponent extends FormBaseComponent {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[] = [];

  constructor() {
    super();

    let messages: {} = super.validationMessages;

    messages = {
      image: {
        required: 'Image is required',
      },

      title: {
        required: 'Title is required',
        maxlength: 'Max length is 20',
      },

      description: {
        maxlength: 'Max length is 50',
      },

      local: {
        maxlength: 'Max length is 12',
      },

      breed: {
        maxlength: 'Max length is 12',
      },
    };

    super.configMessagesValidationBase(messages);
  }

  protected validationFormAdBase(adForm: FormGroup) {
    super.configValidationFormBase(this.formInputElements, adForm);

    super.validationForm(adForm);
  }
}
