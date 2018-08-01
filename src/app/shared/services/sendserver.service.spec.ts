import { TestBed, inject } from '@angular/core/testing';

import { SendserverService } from './sendserver.service';

describe('SendserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendserverService]
    });
  });

  it('should be created', inject([SendserverService], (service: SendserverService) => {
    expect(service).toBeTruthy();
  }));
});
