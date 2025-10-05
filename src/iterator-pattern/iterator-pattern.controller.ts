import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { IteratorPatternService } from './iterator-pattern.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BrowseHistoryDto } from './dtos/BrowseHistoryDto';

@Controller('iterator-pattern')
export class IteratorPatternController {
  constructor(
    private readonly iteratorPatternService: IteratorPatternService,
  ) {}

  @Post('push')
  @ApiOperation({ summary: 'Add a URL to the browsing history' })
  @ApiResponse({ status: 201, description: 'URL added successfully' })
  @ApiBody({ type: BrowseHistoryDto })
  push(@Body() body: BrowseHistoryDto) {
    return this.iteratorPatternService.push(body.url);
  }

  @Delete('pop')
  @ApiOperation({ summary: 'Remove the last visited URL from history' })
  @ApiResponse({ status: 200, description: 'Removed the last visited URL' })
  pop() {
    return this.iteratorPatternService.pop();
  }

  @Get('demo')
  @ApiOperation({ summary: 'Retrieve all URLs in browsing history' })
  @ApiResponse({ status: 200, description: 'Returns the browsing history' })
  getAll() {
    return this.iteratorPatternService.demo();
  }
}
