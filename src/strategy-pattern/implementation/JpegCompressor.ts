import { ICompressor } from './Icompressor';

export class JpegCompressor implements ICompressor {
  compress(): string {
    return 'JpegCompressor is compressing the image  ';
  }
}
