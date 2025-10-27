import type { Observer } from "./Observer.ts";

export class Subject {
  private observers: Set<Observer> = new Set();
  //attach in g.o.f
  public addNotifier(obs: Observer): void {
    this.observers.add(obs);
  }
  //detach in g.o.f
  public removeNotifier(obs: Observer): void {
    this.observers.delete(obs);
  }
  //notify in g.o.f
  public Notify(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}
