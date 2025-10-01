import { DirectionState } from './DirectionState';

export class Direction {
  private _state: DirectionState;

  public get state(): DirectionState {
    return this._state;
  }
  public set state(value: DirectionState) {
    this._state = value;
  }

  // Calculates estimated time of arrival between two points
  calculateETA(
    start: { lat: number; lng: number },
    end: { lat: number; lng: number },
  ) {
    return this.state.calculateETA(start, end);
  }

  // Calculates direction between two points
  getDirection(
    start: { lat: number; lng: number },
    end: { lat: number; lng: number },
  ): string {
    return this._state.getDirection(start, end);
  }
}
