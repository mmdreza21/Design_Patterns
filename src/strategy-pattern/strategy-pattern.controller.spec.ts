import { Test, TestingModule } from '@nestjs/testing';
import { StrategyPatternController } from './strategy-pattern.controller';
import { StrategyPatternService } from './strategy-pattern.service';

describe('StrategyPatternController', () => {
  let controller: StrategyPatternController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StrategyPatternController],
      providers: [StrategyPatternService],
    }).compile();

    controller = module.get<StrategyPatternController>(StrategyPatternController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
