import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCursosComponent } from './pagina-cursos.component';

describe('PaginaCursosComponent', () => {
  let component: PaginaCursosComponent;
  let fixture: ComponentFixture<PaginaCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
