import { Controller }     from '@nestjs/common'
import { Get }            from '@nestjs/common'

import { GreeterService } from '../services'

@Controller('world')
class WorldController {
  constructor(private greeterService: GreeterService) {}

  @Get()
  hello(): string {
    return this.greeterService.greet()
  }
}

export { WorldController }
