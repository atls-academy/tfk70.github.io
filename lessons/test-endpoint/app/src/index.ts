import fastify            from 'fastify'
import cors               from 'fastify-cors'

import { registerRoutes } from './routes'

const bootstrap = () => {
  const server = fastify({ logger: true })

  server.register(cors)

  registerRoutes(server)

  server.listen(process.env.PORT || 4000)
}

bootstrap()
