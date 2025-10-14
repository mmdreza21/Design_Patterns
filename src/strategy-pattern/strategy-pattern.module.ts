import { Module } from '@nestjs/common';
import { StrategyPatternService } from './strategy-pattern.service';
import { StrategyPatternController } from './strategy-pattern.controller';
import { ImageStorage } from './implementation/ImageStorage';
import { ChatClient } from './exercise/ChatClient';

@Module({
  controllers: [StrategyPatternController],
  providers: [StrategyPatternService, ImageStorage, ChatClient],
})
export class StrategyPatternModule {}
