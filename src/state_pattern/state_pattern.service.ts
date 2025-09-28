import { Injectable } from '@nestjs/common';
import { Canvas } from './Canvas';
import { ToolType } from './ToolType';

@Injectable()
export class StatePatternService {
  public demo() {
    const canvas = new Canvas();
    canvas.currentTool = ToolType.ERASER;
    canvas.mouseDown();
    canvas.mouseUp();
    return 'state pattern test ';
  }
}
