import type { ICommand } from "./FX/ICommand.ts";

export class CompositeCommand implements ICommand {
  private listOfCommands: Array<ICommand> = new Array();

  public add(command: ICommand) {
    this.listOfCommands.push(command);
  }

  execute(): void {
    for (const command of this.listOfCommands) {
      command.execute();
    }
  }
}
