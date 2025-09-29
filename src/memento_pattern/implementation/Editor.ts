import { EditorState } from './EditorState';

//Originator
export class Editor {
  private _content: string;
  private _fontName: string;
  private _fontSize: string;

  public get content(): string {
    return this._content;
  }
  public set content(content: string) {
    this._content = content;
  }

  public get fontName(): string {
    return this._fontName;
  }
  public set fontName(fontName: string) {
    this._fontName = fontName;
  }
  public get fontSize(): string {
    return this._fontSize;
  }
  public set fontSize(fontSize: string) {
    this._fontSize = fontSize;
  }

  public createState(): EditorState {
    return new EditorState(this.content, this.fontName, this.fontSize);
  }

  public restore(state: EditorState) {
    this.content = state.content;
    this.fontName = state.fontName;
    this.fontSize = state.fontSize;
  }
}
