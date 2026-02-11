import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentoring } from './mentoring';

describe('Mentoring', () => {
  let component: Mentoring;
  let fixture: ComponentFixture<Mentoring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mentoring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mentoring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
