import { Injectable } from '@nestjs/common';

//Originator
class Editor {
  private _content: string;

  public get content(): string {
    return this._content;
  }

  public set content(content: string) {
    this._content = content;
  }

  private createState() {
    const state = new EditorState(this.content);
    const history = new History();
    history.push(state);
  }

  private restore(state: EditorState | undefined) {
    this.content = state ? state.content : '';
  }

  public undo() {
    const history = new History();

    this.restore(history.pop());
  }
}

//Memento
class EditorState {
  private _content: string;

  constructor(content: string) {
    this._content = content;
  }

  public get content(): string {
    return this._content;
  }

  public set content(content: string) {
    this._content = content;
  }
}

//CareTaker
class History {
  private states: Array<EditorState>; // javascript's arrays can work like Stacks

  public push(state: EditorState) {
    this.states.push(state);
  }

  pop() {
    return this.states.pop();
  }
}

@Injectable()
export class MementoPatternService {
  demo() {
    const editor = new Editor();

    editor.content = 'mmd';
    editor.content = 'reza';
    editor.content = 'ali';
    editor.undo();
    editor.undo();
    return editor.content;
  }
}
