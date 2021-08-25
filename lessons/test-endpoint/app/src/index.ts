import fastify            from 'fastify'
import cors               from 'fastify-cors'

import { registerRoutes } from './routes'

const bootstrap = () => {
  const server = fastify({ logger: true })

  server.register(cors)

  registerRoutes(server)

  server.listen(process.env.PORT || 4000, process.env.NODE_ENV === 'dev' ? '0.0.0.0' : '127.0.0.1')
}

bootstrap()
