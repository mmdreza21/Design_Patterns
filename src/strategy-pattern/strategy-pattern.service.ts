import { Injectable } from '@nestjs/common';
import { ImageStorage } from './implementation/ImageStorage';
import { JpegCompressor } from './implementation/JpegCompressor';
import { PngCompressor } from './implementation/PNGCompressor';
import { ChatClient } from './exercise/ChatClient';
import { Sha256Enc } from './exercise/Sha256Enc';

@Injectable()
export class StrategyPatternService {
  constructor(
    private imgStorage: ImageStorage,
    private chat: ChatClient,
  ) {}
  demo() {
    return this.imgStorage.store('mamad file', new JpegCompressor());
  }

  demoForPng() {
    return this.imgStorage.store('mamad file', new PngCompressor());
  }

  demoEncryption() {
    return this.chat.sendMessage('hi', new Sha256Enc());
  }
}
