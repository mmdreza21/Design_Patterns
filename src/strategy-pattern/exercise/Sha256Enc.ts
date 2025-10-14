import { IEncryption } from './IEncryptor';

export class Sha256Enc implements IEncryption {
  encrypt(): string {
    return 'encripting with Sha256';
  }
}
