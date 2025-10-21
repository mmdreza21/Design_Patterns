import { AudiTrail } from "./AudiTrail.ts";

export abstract class Task {
  private audiTrail: AudiTrail;
  constructor() {
    this.audiTrail = new AudiTrail();
  }

  execute() {
    this.audiTrail.record();
    this.doExecute();
  }

  protected abstract doExecute(): void;
}
