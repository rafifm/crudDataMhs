import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahDsnComponent } from './tambah-dsn.component';

describe('TambahDsnComponent', () => {
  let component: TambahDsnComponent;
  let fixture: ComponentFixture<TambahDsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahDsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahDsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
