import { Test, TestingModule } from '@nestjs/testing';
import { StrategyPatternService } from './strategy-pattern.service';

describe('StrategyPatternService', () => {
  let service: StrategyPatternService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrategyPatternService],
    }).compile();

    service = module.get<StrategyPatternService>(StrategyPatternService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
