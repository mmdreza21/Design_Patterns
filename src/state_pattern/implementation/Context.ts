import { State } from './State';

export class Context {
  private _state: State;

  set state(state: State) {
    this._state = state;
  }

  get state(): State {
    return this._state;
  }

  public handle() {
    return this._state.handle();
  }
}
