import { DirectionState } from './DirectionState';

export class Driving implements DirectionState {
  calculateETA(
    start: { lat: number; lng: number },
    end: { lat: number; lng: number },
  ): string {
    return this.calculateDrivingETA(start, end).toString();
  }
  getDirection(
    start: { lat: number; lng: number },
    end: { lat: number; lng: number },
  ): string {
    return `Driving directions from ${start.lat},${start.lng} to ${end.lat},${end.lng}`;
  }

  private calculateDrivingETA(start: any, end: any) {
    // mock calculation
    console.log();

    return Math.abs(start.lat - end.lat + start.lng - end.lng) * 2;
  }
}
