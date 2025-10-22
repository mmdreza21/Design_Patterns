import type { ICommand } from "./FX/ICommand.ts";

export class BlackAndWhite implements ICommand {
  execute(): void {
    console.log("Black and Whiting");
  }
}
