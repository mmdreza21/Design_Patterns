import { Controller, Get } from '@nestjs/common';
import { MementoPatternService } from './memento_pattern.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('01-memento-pattern')
@Controller('memento-pattern')
export class MementoPatternController {
  constructor(private readonly mementoPatternService: MementoPatternService) {}

  @Get('demo')
  demo() {
    return this.mementoPatternService.demo();
  }
}
