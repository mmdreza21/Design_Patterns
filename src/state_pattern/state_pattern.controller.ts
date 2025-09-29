import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StatePatternService } from './state_pattern.service';

@ApiTags('02-State-pattern')
@Controller('state-pattern')
export class StatePatternController {
  constructor(private readonly stateService: StatePatternService) {}

  @Get('demo-a')
  demoA() {
    return this.stateService.demo(); // State A
  }

  @Get('demo-b')
  demoB() {
    return this.stateService.demoWithStateB(); // State B
  }
}
