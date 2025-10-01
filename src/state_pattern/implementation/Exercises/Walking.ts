import { DirectionState } from './DirectionState';

export class Walking implements DirectionState {
  calculateETA(
    start: { lat: number; lng: number },
    end: { lat: number; lng: number },
  ): string {
    return this.calculateWalkingETA(start, end).toString();
  }
  getDirection(
    start: { lat: number; lng: number },
    end: { lat: number; lng: number },
  ): string {
    return `Walking directions from ${start.lat},${start.lng} to ${end.lat},${end.lng}`;
  }

  private calculateWalkingETA(start: any, end: any) {
    // mock calculation
    return Math.abs(start.lat - end.lat + start.lng - end.lng) * 5;
  }
}
