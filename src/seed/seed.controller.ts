import { Controller, Get } from '@nestjs/common'
import { SeedService } from './seed.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('seed')
@ApiTags('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  executeSeed() {
    return this.seedService.runSeed()
  }
}
