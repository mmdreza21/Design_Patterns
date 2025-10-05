import { Module } from '@nestjs/common';
import { IteratorPatternService } from './iterator-pattern.service';
import { IteratorPatternController } from './iterator-pattern.controller';
import { BrowseHistory } from './implementation/BrowseHistory';

@Module({
  controllers: [IteratorPatternController],
  providers: [IteratorPatternService, BrowseHistory],
})
export class IteratorPatternModule {}
