import { Validators } from '@angular/forms';

import { AdInputBase } from '@app/ad/shared/models/ad-input-base.model';

export class MissingHelper {
  static mountFormInputs(): AdInputBase[] {
    return [
      {
        name: 'image',
        displayName: 'Image',
        type: 'text',
        placeholder: 'Your pet have a image?',
        errorMessage: 'image',
      },

      {
        name: 'title',
        displayName: 'Title',
        type: 'text',
        placeholder: 'Your ad title',
        errorMessage: 'title',
      },

      {
        name: 'gender',
        displayName: 'Gender',
        type: 'select',
        errorMessage: 'gender',
        optionsSelect: [
          {
            value: 'm',
            desc: 'Male',
          },
          {
            value: 'f',
            desc: 'Female',
          },
        ],
      },

      {
        name: 'description',
        displayName: 'Description',
        type: 'text',
        placeholder: 'Pet Description',
        errorMessage: 'description',
      },

      {
        name: 'local',
        displayName: 'Local',
        type: 'text',
        placeholder: 'Type the local',
        errorMessage: 'local',
      },

      {
        name: 'breed',
        displayName: 'Breed',
        type: 'text',
        placeholder: 'Your pet have a breed?',
        errorMessage: 'breed',
      },
    ];
  }

  static mountFormGroup(): Object {
    return {
      image: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.maxLength(20)]],
      gender: [''],
      description: ['', [Validators.maxLength(50)]],
      local: ['', [Validators.maxLength(12)]],
      breed: ['', [Validators.maxLength(12)]],
    };
  }
}
