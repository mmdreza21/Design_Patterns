import { Service } from "../types/Service.ts";
import { Chart } from "./implementation/Chart.ts";
import { DataSource } from "./implementation/DataSource.ts";
import { SpreadSheet } from "./implementation/SpreadSheet.ts";

export class ObserverPattern implements Service {
  public static test() {
    const ds = new DataSource();
    const sheet1 = new SpreadSheet(ds);
    const sheet2 = new SpreadSheet(ds);
    const chart = new Chart(ds);

    ds.addNotifier(sheet1);
    ds.addNotifier(sheet2);
    ds.addNotifier(chart);

    ds.value = 26;
    ds.value = 24;
    ds.value = 21;
  }
}
