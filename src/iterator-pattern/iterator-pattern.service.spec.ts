import { Test, TestingModule } from '@nestjs/testing';
import { IteratorPatternService } from './iterator-pattern.service';

describe('IteratorPatternService', () => {
  let service: IteratorPatternService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IteratorPatternService],
    }).compile();

    service = module.get<IteratorPatternService>(IteratorPatternService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
