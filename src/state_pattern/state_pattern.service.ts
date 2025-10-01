import { Injectable } from '@nestjs/common';
import { Context } from './implementation/Context';
import { ConcreteStateA } from './implementation/ConcreteStateA';
import { ConcreteStateB } from './implementation/ConcreteStateB';
import { Direction } from './implementation/Exercises/Direction';
import { Driving } from './implementation/Exercises/Driving';

@Injectable()
export class StatePatternService {
  constructor(
    private readonly stateA: ConcreteStateA,
    private readonly stateB: ConcreteStateB,
    private readonly driving: Driving,
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

  public calcDirection() {
    const direction = new Direction(this.driving);
    const mockLocation = {
      start: { lat: 25, lng: 80 },
      end: { lat: 423123, lng: 231 },
    };
    return direction.calculateETA(mockLocation.start, mockLocation.end);
  }

  public getDirection() {
    const direction = new Direction(this.driving);
    const mockLocation = {
      start: { lat: 25, lng: 80 },
      end: { lat: 323.123123, lng: 838121 },
    };
    return direction.getDirection(mockLocation.start, mockLocation.end);
  }
}
