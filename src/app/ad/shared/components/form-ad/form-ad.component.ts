import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-ad',
  templateUrl: './form-ad.component.html',
  styleUrls: ['./form-ad.component.scss'],
})
export class FormAdComponent {
  @Input() adType: string = '';
}
