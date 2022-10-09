import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AdBaseComponent } from '@app/ad/ad.base.component';
import { MissingHelper } from './helpers/missing.helper';

@Component({
  selector: 'app-ad-missing',
  templateUrl: './missing.component.html',
  styleUrls: ['./missing.component.scss'],
})
export class MissingComponent
  extends AdBaseComponent
  implements OnInit, AfterViewInit
{
  missingFormGroup!: FormGroup;

  formInputs = MissingHelper.mountFormInputs();

  constructor(private cdref: ChangeDetectorRef, private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.missingFormGroup = this.fb.group(MissingHelper.mountFormGroup());
  }

  ngAfterViewInit(): void {
    super.validationFormAdBase(this.missingFormGroup);

    this.cdref.detectChanges();
  }
}
