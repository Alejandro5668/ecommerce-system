import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadenas } from './cadenas';

describe('Cadenas', () => {
  let component: Cadenas;
  let fixture: ComponentFixture<Cadenas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadenas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadenas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
