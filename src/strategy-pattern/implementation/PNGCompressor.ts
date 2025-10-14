import { ICompressor } from './Icompressor';

export class PngCompressor implements ICompressor {
  compress(): string {
    return 'PngCompressor is compressing the image  ';
  }
}
