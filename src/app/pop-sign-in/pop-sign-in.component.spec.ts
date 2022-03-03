import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopSignInComponent } from './pop-sign-in.component';

describe('PopSignInComponent', () => {
  let component: PopSignInComponent;
  let fixture: ComponentFixture<PopSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
