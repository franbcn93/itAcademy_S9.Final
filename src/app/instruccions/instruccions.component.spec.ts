import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionsComponent } from './instruccions.component';

describe('InstruccionsComponent', () => {
  let component: InstruccionsComponent;
  let fixture: ComponentFixture<InstruccionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstruccionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
