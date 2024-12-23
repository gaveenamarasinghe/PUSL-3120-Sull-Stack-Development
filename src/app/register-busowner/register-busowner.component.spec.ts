import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBusownerComponent } from './register-busowner.component';

describe('RegisterBusownerComponent', () => {
  let component: RegisterBusownerComponent;
  let fixture: ComponentFixture<RegisterBusownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterBusownerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBusownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
