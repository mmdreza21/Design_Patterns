import { Injectable } from '@nestjs/common';
import { ICompressor } from './Icompressor';

@Injectable()
export class ImageStorage {
  constructor() {}

  public store(fileName: string, compressor: ICompressor) {
    return compressor.compress();
  }
}
