import { Controller } from '@nestjs/common';
import { StrategyPatternService } from './strategy-pattern.service';

@Controller('strategy-pattern')
export class StrategyPatternController {
  constructor(private readonly strategyPatternService: StrategyPatternService) {}
}
