import { Module } from '@nestjs/common';
import { StatePatternService } from './state_pattern.service';
import { StatePatternController } from './state_pattern.controller';
import { ConcreteStateA } from './implementation/ConcreteStateA';
import { ConcreteStateB } from './implementation/ConcreteStateB';

@Module({
  controllers: [StatePatternController],
  providers: [StatePatternService, ConcreteStateA, ConcreteStateB],
})
export class StatePatternModule {}
