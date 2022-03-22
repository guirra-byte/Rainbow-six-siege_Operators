import { response } from "express";
import { ICreateOperatorsRepository } from "../../repository/ICreateOperator";
import fs from 'fs'
import { parse } from 'csv-parse'

type ImportOperators = {
  name: string,
  description: string,
  country: string,
  operatorFunction: string,
  side: "Attack" | "Defend"
}

export class CreateOperatorsImportUseCase {

  constructor(private operatorsImportUseCase: ICreateOperatorsRepository) { }

  loadOperators(file: Express.Multer.File): Promise<ImportOperators[]> {

    return new Promise((resolve, reject) => {


      const stream = fs.createReadStream(file.path)

      const operators: ImportOperators[] = []

      const parseFile = parse()
      stream.pipe(parseFile)

      parseFile.on("data", async (line) => {

        const [name, description, country, operatorFunction, side] = line
        console.log(line)

        operators.push({
          name,
          description,
          country,
          operatorFunction,
          side
        })
      })

        .on("end", () => {
          resolve(operators)
          console.log(operators)
        })

        .on("error", (err) => {
          reject(err)

        })

    })
  }


  async execute(file: Express.Multer.File): Promise<void> {

    const operators = await this.loadOperators(file)

    operators.map(async (operatorFind) => {

      const { name, description, country, operatorFunction, side } = operatorFind

      const existOperator = this.operatorsImportUseCase.findByName(name)

      if (!existOperator) {

        this.operatorsImportUseCase.save({
          name,
          description,
          country,
          operatorFunction,
          side
        })
      }
    })

  }
}
