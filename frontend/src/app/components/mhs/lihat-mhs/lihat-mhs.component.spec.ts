import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LihatMhsComponent } from './lihat-mhs.component';

describe('LihatMhsComponent', () => {
  let component: LihatMhsComponent;
  let fixture: ComponentFixture<LihatMhsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LihatMhsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LihatMhsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
