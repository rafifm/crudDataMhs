import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LihatDsnComponent } from './lihat-dsn.component';

describe('LihatDsnComponent', () => {
  let component: LihatDsnComponent;
  let fixture: ComponentFixture<LihatDsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LihatDsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LihatDsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
