import Price from "./Price";

export class NumberPrice implements Price {
  private readonly price: number;

  constructor(price: number) {
    this.price = price;
  }

  async amount(): Promise<number> {
    return this.price;
  }
}