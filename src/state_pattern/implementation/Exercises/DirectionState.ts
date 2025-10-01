type location = { lat: number; lng: number };

export interface DirectionState {
  calculateETA(start: location, end: location): string;
  getDirection(start: location, end: location): string;
}
