import fastifyCors from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastify from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { env } from './env.ts'

const app = fastify()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors).withTypeProvider<ZodTypeProvider>()

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Task Tracker API',
      version: '0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.get('/', () => {
  return 'OK'
})

app.listen({ port: env.PORT })
