export class DirectionService {
  mode: string;

  constructor(mode: string = 'driving') {
    this.mode = mode; // driving, walking, cycling
  }

  // Calculates estimated time of arrival between two points
  calculateETA(
    start: { lat: number; lng: number },
    end: { lat: number; lng: number },
  ) {
    if (this.mode === 'driving') {
      return this.calculateDrivingETA(start, end);
    } else if (this.mode === 'walking') {
      return this.calculateWalkingETA(start, end);
    } else if (this.mode === 'cycling') {
      return this.calculateCyclingETA(start, end);
    }
    throw new Error('Unsupported mode of transportation');
  }

  // Calculates direction between two points
  getDirection(
    start: { lat: number; lng: number },
    end: { lat: number; lng: number },
  ) {
    if (this.mode === 'driving') {
      return `Driving directions from ${start.lat},${start.lng} to ${end.lat},${end.lng}`;
    } else if (this.mode === 'walking') {
      return `Walking directions from ${start.lat},${start.lng} to ${end.lat},${end.lng}`;
    } else if (this.mode === 'cycling') {
      return `Cycling directions from ${start.lat},${start.lng} to ${end.lat},${end.lng}`;
    }
    return 'No directions available';
  }

  private calculateDrivingETA(start: any, end: any) {
    // mock calculation
    return Math.abs(start.lat - end.lat + start.lng - end.lng) * 2;
  }

  private calculateWalkingETA(start: any, end: any) {
    // mock calculation
    return Math.abs(start.lat - end.lat + start.lng - end.lng) * 5;
  }

  private calculateCyclingETA(start: any, end: any) {
    // mock calculation
    return Math.abs(start.lat - end.lat + start.lng - end.lng) * 3;
  }

  // Allows switching mode at runtime
  setMode(mode: string) {
    this.mode = mode;
  }
}
