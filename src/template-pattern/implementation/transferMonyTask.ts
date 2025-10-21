import { AudiTrail } from "./AudiTrail.ts";
import { Task } from "./Task.ts";

export class TransFerMoneyTask extends Task {
  protected doExecute(): void {
    console.log("transfer Money ");
  }
}
