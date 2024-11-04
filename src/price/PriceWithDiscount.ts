import Price from "./Price";

export class PriceWithDiscount implements Price {
  private readonly origin: Price;
  private readonly discountRate: number;

  constructor(origin: Price, discountRate: number = 0) {
    this.origin = origin;
    this.discountRate = discountRate;
  }

  async amount(): Promise<number> {
    if (this.discountRate < 0 || this.discountRate > 100) {
      throw new Error("Discount rate must be between 0 and 100.");
    }
    return await this.origin.amount() * (1 - this.discountRate / 100);
  }
}
