import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwerFormComponent } from './form-ower.component';

describe('OwerFormComponent', () => {
  let component: OwerFormComponent;
  let fixture: ComponentFixture<OwerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwerFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OwerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
