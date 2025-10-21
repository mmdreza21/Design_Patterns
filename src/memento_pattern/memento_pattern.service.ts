import { Editor } from './implementation/Editor';
import { History } from './implementation/History';

export class MementoPatternService {
  public demo(): { content: string; fontName: string; fontSize: string } {
    const editor = new Editor();
    const history = new History();

    editor.content = 'mmd';
    editor.fontName = 'BNazanin';
    editor.fontSize = '25';
    history.push(editor.createState());

    editor.fontName = 'console';
    editor.fontSize = '10';
    editor.content = 'reza';
    history.push(editor.createState());

    editor.content = 'ali';
    editor.fontName = 'tahoma';
    editor.fontSize = '28';

    editor.restore(history.pop()!);

    return {
      content: editor.content,
      fontName: editor.fontName,
      fontSize: editor.fontSize,
    };
  }
}
