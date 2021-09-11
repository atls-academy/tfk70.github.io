// TODO rename main.ts -> index.ts
// TODO remove @nestjs/cli
// TODO get rid of tsconfigs

import { NestFactory } from '@nestjs/core'

import { WorldModule } from './module'

const bootstrap = async () => {
  const app = await NestFactory.create(WorldModule)

  app.listen(3001)
}

bootstrap()
