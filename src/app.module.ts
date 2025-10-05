import { Module } from '@nestjs/common';
import { MementoPatternModule } from './memento_pattern/memento_pattern.module';
import { StatePatternModule } from './state_pattern/state_pattern.module';
import { IteratorPatternModule } from './iterator-pattern/iterator-pattern.module';

@Module({
  imports: [MementoPatternModule, StatePatternModule, IteratorPatternModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
