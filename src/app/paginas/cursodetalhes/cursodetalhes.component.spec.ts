import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursodetalhesComponent } from './cursodetalhes.component';

describe('CursodetalhesComponent', () => {
  let component: CursodetalhesComponent;
  let fixture: ComponentFixture<CursodetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursodetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursodetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
