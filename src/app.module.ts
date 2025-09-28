import { Module } from '@nestjs/common';
import { MementoPatternModule } from './memento_pattern/memento_pattern.module';

@Module({
  imports: [MementoPatternModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
