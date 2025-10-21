import { AudiTrail } from "./AudiTrail.ts";
import { Task } from "./Task.ts";

export class GenerateReportTask extends Task {
  protected doExecute(): void {
    console.log("generating Report Task!");
  }
}
