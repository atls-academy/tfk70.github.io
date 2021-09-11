import { Injectable } from '@nestjs/common'

@Injectable()
class GreeterService {
  private readonly greetMessage: string = 'Hello world'

  greet() {
    console.log(this.greetMessage)
    return this.greetMessage
  }
}

export { GreeterService }
