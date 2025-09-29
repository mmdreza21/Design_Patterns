import { Injectable } from '@nestjs/common';
import { State } from './State';

@Injectable()
export class ConcreteStateA implements State {
  handle(): string {
    return 'Handling request in State A';
  }
}
