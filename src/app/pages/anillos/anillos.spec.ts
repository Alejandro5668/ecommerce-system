import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anillos } from './anillos';

describe('Anillos', () => {
  let component: Anillos;
  let fixture: ComponentFixture<Anillos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Anillos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anillos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
