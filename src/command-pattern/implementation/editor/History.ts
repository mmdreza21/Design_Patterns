import type { IUndoAbleCommand } from "./UndoableCommand.ts";

export class History {
  private commands: IUndoAbleCommand[] = new Array<IUndoAbleCommand>();
  //   private currentCommandIndex: number = -1;

  public push(command: IUndoAbleCommand): void {
    this.commands.push(command);
  }

  public pop(): IUndoAbleCommand | null {
    return this.commands.pop() || null;
  }
}
