import { Controller, Get } from '@nestjs/common';
import { StatePatternService } from './state_pattern.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('02-State-pattern')
@Controller('state-pattern')
export class StatePatternController {
  constructor(private readonly statePatternService: StatePatternService) {}

  @Get('demo')
  demo() {
    return this.statePatternService.demo();
  }
}
