import { TestBed, inject } from '@angular/core/testing';

import { ServicoCursosService } from './servico-cursos.service';

describe('ServicoCursosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicoCursosService]
    });
  });

  it('should be created', inject([ServicoCursosService], (service: ServicoCursosService) => {
    expect(service).toBeTruthy();
  }));
});
