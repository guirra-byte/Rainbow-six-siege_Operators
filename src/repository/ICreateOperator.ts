import { CreateOperators } from "../../services/CreateOperator";
import { Operator } from "../model/agent";

interface ICreateOperatorsRepositoryDTO {
  name: string,
  description: string,
  operatorFunction: string,
  country: string,
  side: string
}

interface ICreateOperatorsRepository {

  findByName(name: string): Operator
  save(data: ICreateOperatorsRepositoryDTO): void
}

export { ICreateOperatorsRepository }
export { ICreateOperatorsRepositoryDTO }