import { IEncryption } from './IEncryptor';

export class Sha256Enc implements IEncryption {
  encrypt(): string {
    return 'encrypted with Sha256';
  }
}
