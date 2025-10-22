import type { ICommand } from "./ICommand.ts";

export class Button {
  private _label: string;
  private command: ICommand;

  constructor(command: ICommand) {
    this.command = command;
  }

  public click(): void {
    this.command.execute();
  }

  public get label(): string {
    return this._label;
  }
  public set label(value: string) {
    this._label = value;
  }
}
