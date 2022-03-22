import { CreateOperatorsImportUseCase } from "./CreateOperatorsImportUseCase";
import { Request, Response } from 'express'



export class CreateOperatorsImportController {

  constructor(private operatorsImportController: CreateOperatorsImportUseCase) { }

  handle(request: Request, response: Response) {

    const { file } = request;
    this.operatorsImportController.execute(file)

    return response
      .status(201)
      .send()

  }
} 