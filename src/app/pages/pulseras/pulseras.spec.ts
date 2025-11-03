import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pulseras } from './pulseras';

describe('Pulseras', () => {
  let component: Pulseras;
  let fixture: ComponentFixture<Pulseras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pulseras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pulseras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
