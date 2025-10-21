import { Window } from "./Window.ts";

export class SettingsWindow extends Window {
  protected beforeClose(): void {
    console.log("SettingsWindow before closing!");
  }

  protected afterClose(): void {
    console.log("SettingsWindow after closing!");
  }
}
