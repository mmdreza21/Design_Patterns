import { UIControl } from "./UIControl";

export class ListBox extends UIControl {
  private _selection: string;

  public get selection(): string {
    return this._selection;
  }
  public set selection(value: string) {
    this._selection = value;
  }
}
