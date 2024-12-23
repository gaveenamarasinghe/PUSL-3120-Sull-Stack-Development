import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBusownerComponent } from './login-busowner.component';

describe('LoginBusownerComponent', () => {
  let component: LoginBusownerComponent;
  let fixture: ComponentFixture<LoginBusownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginBusownerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBusownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
