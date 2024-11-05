import Price from "./Price";

export class NumberPrice implements Price {

  constructor(
    private readonly price: number
  ) {}

  async amount(): Promise<number> {
    return this.price
  }
}