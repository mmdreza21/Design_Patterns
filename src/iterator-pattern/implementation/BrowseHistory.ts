import { Injectable } from '@nestjs/common';
import { Iterator } from './Iterator';
import { ArrayIterator } from './ArrayIterator';

@Injectable()
export class BrowseHistory {
  private _urls: Array<string> = new Array<string>();

  public push(item: string): void {
    this._urls.push(item);
  }

  public pop(): string {
    return this._urls.pop() ?? '';
  }

  public createIterator(): Iterator<string> {
    return new ArrayIterator(this);
  }

  get urls(): string[] {
    return [...this._urls];
  }
}
