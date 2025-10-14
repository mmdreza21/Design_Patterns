import { Injectable } from '@nestjs/common';
import { IEncryption } from './IEncryptor';

@Injectable()
export class ChatClient {
  sendMessage(message: string, enc: IEncryption) {
    return enc.encrypt();
  }
}
