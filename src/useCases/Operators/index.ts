import { OperatorsRepository } from "../../repository/implementation/OperatorsRepository";
import { CreateOperatorController } from "./CreateOperatorController";
import { CreateOperatorUseCase } from "./CreateOperatorUseCase";

const newOperatorRepository = OperatorsRepository.getInstance()

const operatorsUseCase = new CreateOperatorUseCase(newOperatorRepository)

const operatorsController = new CreateOperatorController(operatorsUseCase)

export { operatorsController }


