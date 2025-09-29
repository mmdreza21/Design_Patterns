import { Injectable } from '@nestjs/common';
import { Context } from './implementation/Context';
import { ConcreteStateA } from './implementation/ConcreteStateA';
import { ConcreteStateB } from './implementation/ConcreteStateB';

@Injectable()
export class StatePatternService {
  constructor(
    private readonly stateA: ConcreteStateA,
    private readonly stateB: ConcreteStateB,
  ) {}

  public demo() {
    const context = new Context();
    context.state = this.stateA; // you can switch to stateB easily
    return context.handle();
  }

  public demoWithStateB() {
    const context = new Context();
    context.state = this.stateB;
    return context.handle();
  }
}
