import { UIControl } from "./UIControl";

export class Button extends UIControl {
  private _isEnabled: boolean;

  public get isEnabled(): boolean {
    return this._isEnabled;
  }
  public set isEnabled(value: boolean) {
    this._isEnabled = value;
  }
}
