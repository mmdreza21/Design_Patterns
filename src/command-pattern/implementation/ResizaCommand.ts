import type { ICommand } from "./FX/ICommand.ts";

export class ResizeCommand implements ICommand {
  execute(): void {
    console.log("Resize");
  }
}
