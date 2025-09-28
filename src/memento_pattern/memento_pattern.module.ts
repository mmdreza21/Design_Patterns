import { Module } from '@nestjs/common';
import { MementoPatternService } from './memento_pattern.service';
import { MementoPatternController } from './memento_pattern.controller';

@Module({
  controllers: [MementoPatternController],
  providers: [MementoPatternService],
})
export class MementoPatternModule {}
