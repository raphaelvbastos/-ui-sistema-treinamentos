import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoscategoriaComponent } from './cursoscategoria.component';

describe('CursoscategoriaComponent', () => {
  let component: CursoscategoriaComponent;
  let fixture: ComponentFixture<CursoscategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoscategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoscategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
