import { CreateOperatorsImportController } from "./CreateOperatorsImportController";
import { CreateOperatorsImportUseCase } from "./CreateOperatorsImportUseCase";
import { OperatorsRepository } from "../../repository/implementation/OperatorsRepository";

const newOperatorsRepository = OperatorsRepository.getInstance()

const operatorsImportUseCase = new CreateOperatorsImportUseCase(newOperatorsRepository)

const operatorsImportController = new CreateOperatorsImportController(operatorsImportUseCase)

export { operatorsImportController }

