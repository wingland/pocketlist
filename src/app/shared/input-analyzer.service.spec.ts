import { TestBed } from '@angular/core/testing';

import { InputAnalyzerService } from './input-analyzer.service';

describe('InputAnalyzerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputAnalyzerService = TestBed.get(InputAnalyzerService);
    expect(service).toBeTruthy();
  });
});
