import { EditorWindow } from "./exercise/EditorWindow.ts";
import { SettingsWindow } from "./exercise/SettingsWindow.ts";
import { GenerateReportTask } from "./implementation/GenerateReportTask.ts";
import { TransFerMoneyTask } from "./implementation/transferMonyTask.ts";

export class TemplatePattern {
  public static test() {
    const transferMoney = new TransFerMoneyTask();
    const generateReportTask = new GenerateReportTask();

    transferMoney.execute();
    generateReportTask.execute();
    console.log("---");

    const settings = new SettingsWindow("Photos!");
    // const editor = new EditorWindow("Photos!");

    settings.close(); // should trigger your hooks
    // editor.close(); // should trigger your hooks
  }
}
