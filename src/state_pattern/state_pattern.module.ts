import { Module } from '@nestjs/common';
import { StatePatternService } from './state_pattern.service';
import { StatePatternController } from './state_pattern.controller';

@Module({
  controllers: [StatePatternController],
  providers: [StatePatternService],
})
export class StatePatternModule {}
