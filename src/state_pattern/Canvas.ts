import { ToolType } from './ToolType';

export class Canvas {
  private _currentTool: ToolType;
  public get currentTool(): ToolType {
    return this._currentTool;
  }
  public set currentTool(value: ToolType) {
    this._currentTool = value;
  }

  public mouseDown(): void {
    let text = '';
    switch (this.currentTool) {
      case ToolType.SELECTION:
        text = 'Selection ToolType';
        break;
      case ToolType.BRUSh:
        text = 'BRUSH ToolType';
        break;
      case ToolType.ERASER:
        text = '.ERASER ToolType';
        break;
      default:
        text = 'no tool selected DEFAULT';
        break;
    }
    console.log(text);
  }

  public mouseUp(): void {
    let text = '';
    switch (this.currentTool) {
      case ToolType.SELECTION:
        text = 'Dashed Rectangle';
        break;
      case ToolType.BRUSh:
        text = 'Draw a line ';
        break;
      case ToolType.ERASER:
        text = 'Eraser Icon';
        break;
      default:
        text = 'DO NOTHING';
        break;
    }
    console.log(text);
  }
}
