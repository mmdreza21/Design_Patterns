import { IEncryption } from './IEncryptor';

export class RSAEnc implements IEncryption {
  encrypt(): string {
    return 'encripting with RSA';
  }
}
