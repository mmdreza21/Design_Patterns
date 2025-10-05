import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class BrowseHistoryDto {
  @ApiProperty({
    description: 'URL to add to the browsing history',
    example: 'https://openai.com/research',
  })
  @IsString()
  url: string;
}
