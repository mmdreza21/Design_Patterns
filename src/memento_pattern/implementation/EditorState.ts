//Memento

export class EditorState {
  constructor(
    private _content: string,
    private _fontName: string,
    private _fontSize: string,
  ) {}

  public get content(): string {
    return this._content;
  }

  public get fontName(): string {
    return this._fontName;
  }

  public get fontSize(): string {
    return this._fontSize;
  }
}
