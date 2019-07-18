import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoscategoriasComponent } from './cursoscategorias.component';

describe('CursoscategoriasComponent', () => {
  let component: CursoscategoriasComponent;
  let fixture: ComponentFixture<CursoscategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoscategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoscategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
