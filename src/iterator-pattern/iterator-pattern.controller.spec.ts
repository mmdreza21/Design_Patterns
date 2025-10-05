import { Test, TestingModule } from '@nestjs/testing';
import { IteratorPatternController } from './iterator-pattern.controller';
import { IteratorPatternService } from './iterator-pattern.service';

describe('IteratorPatternController', () => {
  let controller: IteratorPatternController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IteratorPatternController],
      providers: [IteratorPatternService],
    }).compile();

    controller = module.get<IteratorPatternController>(IteratorPatternController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
