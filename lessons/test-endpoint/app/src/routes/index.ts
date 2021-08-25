import { FastifyInstance } from 'fastify'

import { helloRoute }      from './hello'
import { reverseRoute }    from './reverse'

const registerRoutes = (server: FastifyInstance) => {
  server.get('/hello', helloRoute)
  server.get('/reverse', reverseRoute)
}

export { registerRoutes }
