import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpComponent } from './registerp.component';

describe('RegisterpComponent', () => {
  let component: RegisterpComponent;
  let fixture: ComponentFixture<RegisterpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
