import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotkaniaComponent } from './spotkania.component';

describe('SpotkaniaComponent', () => {
  let component: SpotkaniaComponent;
  let fixture: ComponentFixture<SpotkaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotkaniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotkaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
