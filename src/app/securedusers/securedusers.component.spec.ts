import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredusersComponent } from './securedusers.component';

describe('SecuredusersComponent', () => {
  let component: SecuredusersComponent;
  let fixture: ComponentFixture<SecuredusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuredusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuredusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
