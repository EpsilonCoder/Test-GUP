/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GupServiceService } from './Gup-service.service';

describe('Service: GupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GupServiceService]
    });
  });

  it('should ...', inject([GupServiceService], (service: GupServiceService) => {
    expect(service).toBeTruthy();
  }));
});
