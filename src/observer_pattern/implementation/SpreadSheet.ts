import { DataSource } from "./DataSource.ts";
import type { Observer } from "./Observer.ts";

export class SpreadSheet implements Observer {
  private dataSource: DataSource;
  constructor(ds: DataSource) {
    this.dataSource = ds;
  }
  update(): void {
    console.log(" SpreadSheet got notified ! ", this.dataSource.value);
  }
}
