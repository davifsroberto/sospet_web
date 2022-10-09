import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() inputFormControl: FormControl = new FormControl();

  @Input() inputFormFb: any = new FormBuilder();
  @Input() inputFormGroup: FormGroup = this.inputFormFb;

  constructor() {
    console.log(this.inputFormControl);
  }
}
