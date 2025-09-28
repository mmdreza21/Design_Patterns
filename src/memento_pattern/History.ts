import { Injectable } from '@nestjs/common';
import { EditorState } from './EditorState';

//CareTaker
@Injectable()
export class History {
  private states: Array<EditorState> = []; // javascript's arrays can work like Stacks

  public push(state: EditorState): void {
    this.states.push(state);
  }

  public pop(): EditorState | undefined {
    return this.states.pop();
  }
}
