import { History } from "./History.ts";
import { HtmlDocument } from "./HtmlDocument.ts";
import type { IUndoAbleCommand } from "./UndoableCommand.ts";

export class BoldCommand implements IUndoAbleCommand {
  private prevContent: string = "";
  private document: HtmlDocument;
  private history: History;

  constructor(document: HtmlDocument, history: History) {
    this.document = document;
    this.history = history;
  }

  execute(): void {
    this.prevContent = this.document.content;
    this.document.makeBold();
    this.history.push(this);
  }

  unExecute(): void {
    this.document.content = this.prevContent;
  }
}
