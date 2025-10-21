import { BrowseHistory } from './implementation/BrowseHistory';
import { Iterator } from './implementation/Iterator';

export class IteratorPatternService {
  constructor(private readonly history: BrowseHistory) {}

  push(url: string) {
    this.history.push(url);
    return {
      message: 'URL added to history successfully',
    };
  }

  pop() {
    const removed = this.history.pop();
    return {
      message: removed ? `Removed: ${removed}` : 'History is empty',
    };
  }

  public demo() {
    this.history.push('mamad');
    this.history.push('reza');
    this.history.push('shirin');
    this.history.push('sam');
    const iterator: Iterator<string> = this.history.createIterator();
    while (iterator.hasNext()) {
      var url = iterator.current();
      console.log(url);
      iterator.next();
    }
  }
}
