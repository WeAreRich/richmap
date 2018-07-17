import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PovertyMapComponent } from './poverty-map.component';

describe('PovertyMapComponent', () => {
  let component: PovertyMapComponent;
  let fixture: ComponentFixture<PovertyMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PovertyMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PovertyMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
