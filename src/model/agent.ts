import { v4 as uuidV4 } from 'uuid'

export class Operator {
  name: string;
  description: string;
  country: string;
  side: string;
  operatorFunction: string
  id?: string

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}