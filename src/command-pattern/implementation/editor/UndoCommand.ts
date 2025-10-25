import type { ICommand } from "./Command.ts";
import { History } from "./History.ts";

export class UndoCommand implements ICommand {
  private history: History;

  constructor(history: History) {
    this.history = history;
  }

  execute(): void {
    const command = this.history.pop();
    if (command) {
      command.unExecute();
    }
  }
}
