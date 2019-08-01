import { TestBed, inject } from '@angular/core/testing';

import { QuestionariosService } from './questionarios.service';

describe('QuestionariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionariosService]
    });
  });

  it('should be created', inject([QuestionariosService], (service: QuestionariosService) => {
    expect(service).toBeTruthy();
  }));
});
