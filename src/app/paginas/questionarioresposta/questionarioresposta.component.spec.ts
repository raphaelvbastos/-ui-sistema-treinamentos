import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionariorespostaComponent } from './questionarioresposta.component';

describe('QuestionariorespostaComponent', () => {
  let component: QuestionariorespostaComponent;
  let fixture: ComponentFixture<QuestionariorespostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionariorespostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionariorespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
