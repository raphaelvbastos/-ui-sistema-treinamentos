import { TestBed, inject } from '@angular/core/testing';

import { UsuariotipoService } from './usuariotipo.service';

describe('UsuariotipoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuariotipoService]
    });
  });

  it('should be created', inject([UsuariotipoService], (service: UsuariotipoService) => {
    expect(service).toBeTruthy();
  }));
});
