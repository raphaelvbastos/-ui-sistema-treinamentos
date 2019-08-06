import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioalunoComponent } from './questionarioaluno.component';

describe('QuestionarioalunoComponent', () => {
  let component: QuestionarioalunoComponent;
  let fixture: ComponentFixture<QuestionarioalunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionarioalunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarioalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
