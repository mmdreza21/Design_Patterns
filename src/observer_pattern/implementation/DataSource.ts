import type { Observer } from "./Observer.ts";
import { Subject } from "./Subject.ts";

export class DataSource extends Subject {
  private _value: number;

  public get value(): number {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
    this.Notify();
  }
}
