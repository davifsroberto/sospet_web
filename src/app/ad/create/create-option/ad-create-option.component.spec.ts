import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCreateOptionComponent } from './ad-create-option.component';

describe('CreateOptionComponent', () => {
  let component: AdCreateOptionComponent;
  let fixture: ComponentFixture<AdCreateOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdCreateOptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdCreateOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
