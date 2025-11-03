import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dijes } from './dijes';

describe('Dijes', () => {
  let component: Dijes;
  let fixture: ComponentFixture<Dijes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dijes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dijes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
