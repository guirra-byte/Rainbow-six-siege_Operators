import { Request, Response } from 'express'
import { CreateOperatorUseCase } from './CreateOperatorUseCase'


export class CreateOperatorController {

  constructor(private createOperatorUseCase: CreateOperatorUseCase) { }

  handle(request: Request, response: Response) {

    const { name, description, country, operatorFunction, side } = request.body

    this.createOperatorUseCase.execute({ name, description, country, operatorFunction, side })

    return response
      .status(201)
      .send()

  }
}

