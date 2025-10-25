export class HtmlDocument {
  private _content: string = "";

  public makeBold(): void {
    this.content = `<b>${this.content}</b>`;
    console.log("Document content made bold.");
  }

  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }
}
