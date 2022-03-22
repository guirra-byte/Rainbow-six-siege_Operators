import { Operator } from "../../model/agent";
import { ICreateOperatorsRepository } from "../ICreateOperator";
import { ICreateOperatorsRepositoryDTO } from "../ICreateOperator";

export class OperatorsRepository implements ICreateOperatorsRepository {

  private operators: Operator[]

  private static INSTANCE: OperatorsRepository

  private constructor() {
    this.operators = []
  }

  public static getInstance(): OperatorsRepository {

    if (!OperatorsRepository.INSTANCE) {

      OperatorsRepository.INSTANCE = new OperatorsRepository()
    }

    return OperatorsRepository.INSTANCE
  }

  save({ name, description, country, operatorFunction, side }: ICreateOperatorsRepositoryDTO) {

    const newOperators = new Operator()

    Object.assign(newOperators, {
      name,
      description,
      country,
      operatorFunction,
      side
    })

    this.operators.push(newOperators)
    console.log(newOperators)

  }

  findByName(name: string): Operator {

    const operator = this.operators.find(named => named.name === name)
    return operator
  }
}