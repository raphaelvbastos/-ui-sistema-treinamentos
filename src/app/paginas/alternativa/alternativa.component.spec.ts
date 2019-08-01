import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativaComponent } from './alternativa.component';

describe('AlternativaComponent', () => {
  let component: AlternativaComponent;
  let fixture: ComponentFixture<AlternativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
