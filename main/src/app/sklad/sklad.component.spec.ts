import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkladComponent } from './sklad.component';

describe('SkladComponent', () => {
  let component: SkladComponent;
  let fixture: ComponentFixture<SkladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkladComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
