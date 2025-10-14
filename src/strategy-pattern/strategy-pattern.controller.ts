import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { StrategyPatternService } from './strategy-pattern.service';

@ApiTags('Strategy Pattern')
@Controller('strategy')
export class StrategyPatternController {
  constructor(private readonly strategyService: StrategyPatternService) {}

  @Get('demo')
  @ApiOperation({
    summary: 'Demonstrate the Strategy Pattern',
    description:
      'Uses ImageStorage with a JpegCompressor strategy to store an image file.',
  })
  @ApiResponse({
    status: 200,
    description: 'Image compression and storage executed successfully.',
  })
  demo() {
    return this.strategyService.demo();
  }

  @Get('demo_for_png')
  @ApiOperation({
    summary: 'Demonstrate the Strategy Pattern',
    description:
      'Uses ImageStorage with a JpegCompressor strategy to store an image file.',
  })
  @ApiResponse({
    status: 200,
    description: 'Image compression and storage executed successfully.',
  })
  demForPng() {
    return this.strategyService.demoForPng();
  }

  @Get('demo-encryption-sha256')
  @ApiOperation({
    summary: 'Demonstrate encryption strategy pattern',
    description:
      'Encrypts a sample message using the SHA-256 encryption strategy via the Strategy Pattern.',
  })
  @ApiResponse({
    status: 200,
    description: 'Message encrypted successfully.',
  })
  demoEncryption() {
    return this.strategyService.demoEncryption();
  }
}
