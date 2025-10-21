import { Window } from "./Window.ts";

export class EditorWindow extends Window {
  protected beforeClose(): void {
    console.log("EditorWindow beforeClose");
  }

  protected afterClose(): void {
    console.log("EditorWindow afterClose");
  }
}
