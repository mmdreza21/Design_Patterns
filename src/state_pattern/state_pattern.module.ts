import { Module } from '@nestjs/common';
import { StatePatternService } from './state_pattern.service';
import { StatePatternController } from './state_pattern.controller';
import { ConcreteStateA } from './implementation/ConcreteStateA';
import { ConcreteStateB } from './implementation/ConcreteStateB';
import { Driving } from './implementation/Exercises/Driving';
import { Walking } from './implementation/Exercises/Walking';

@Module({
  controllers: [StatePatternController],
  providers: [
    StatePatternService,
    ConcreteStateA,
    ConcreteStateB,
    Driving,
    Walking,
  ],
})
export class StatePatternModule {}
