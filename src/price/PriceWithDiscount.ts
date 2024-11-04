import Price from "./Price";

export class PriceWithDiscount implements Price {

  constructor(
    private readonly origin: Price,
    private readonly discountRate: number = 0
  ) {}

  async amount(): Promise<number> {
    if (this.discountRate < 0 || this.discountRate > 100) {
      throw new Error("Discount rate must be between 0 and 100.");
    }
    return await this.origin.amount() * (1 - this.discountRate / 100);
  }
}
