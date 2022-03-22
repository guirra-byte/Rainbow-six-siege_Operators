import { ICreateOperatorsRepository } from "../repository/ICreateOperator";
import { CreateOperatorController } from "./CreateOperatorController"

type Request = {

  name: string;
  description: string;
  country: string;
  operatorFunction: string;
  side: "Attack" | "Defend"

}

export class CreateOperatorUseCase {

  constructor(private createOperatorRepository: ICreateOperatorsRepository) { }
  execute(data: Request) {

    const verifyOperatorAlreadyExists = this.createOperatorRepository.findByName(data.name)

    if (verifyOperatorAlreadyExists) {

      throw new Error("This Operator ALready Exists")
    }

    this.createOperatorRepository.save(data)

  }
}