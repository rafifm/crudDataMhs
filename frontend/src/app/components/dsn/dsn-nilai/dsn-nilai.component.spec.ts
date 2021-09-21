import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsnNilaiComponent } from './dsn-nilai.component';

describe('DsnNilaiComponent', () => {
  let component: DsnNilaiComponent;
  let fixture: ComponentFixture<DsnNilaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsnNilaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsnNilaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
