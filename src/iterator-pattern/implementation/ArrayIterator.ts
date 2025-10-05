import { BrowseHistory } from './BrowseHistory';
import { Iterator } from './Iterator';

export class ArrayIterator implements Iterator<string> {
  constructor(private history: BrowseHistory) {}
  private index: number;
  hasNext(): boolean {
    return this.index < this.history.urls.length;
  }

  current(): string {
    return this.history.urls[this.index];
  }
  next(): void {
    this.index++;
  }
}
