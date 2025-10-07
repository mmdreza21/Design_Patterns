import { Module } from '@nestjs/common';
import { MementoPatternModule } from './memento_pattern/memento_pattern.module';
import { StatePatternModule } from './state_pattern/state_pattern.module';
import { IteratorPatternModule } from './iterator-pattern/iterator-pattern.module';
import { StrategyPatternModule } from './strategy-pattern/strategy-pattern.module';

@Module({
  imports: [MementoPatternModule, StatePatternModule, IteratorPatternModule, StrategyPatternModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
