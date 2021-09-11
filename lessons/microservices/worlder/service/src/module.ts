import { Module }          from '@nestjs/common'
import { WorldController } from './controllers'
import { GreeterService }  from './services'

@Module({
  controllers: [WorldController],
  providers: [GreeterService],
})
export class WorldModule {}
