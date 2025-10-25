import type { ICommand } from "./Command.ts";

export interface IUndoAbleCommand extends ICommand {
  unExecute(): void;
}
