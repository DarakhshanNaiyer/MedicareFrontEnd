import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMedicineComponent } from './load-medicine.component';

describe('LoadMedicineComponent', () => {
  let component: LoadMedicineComponent;
  let fixture: ComponentFixture<LoadMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
