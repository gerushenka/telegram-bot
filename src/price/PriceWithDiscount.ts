import Price from "./Price";

export class PriceWithDiscount implements Price {
  private readonly basePrice: Price;
  private readonly discountRate: number;

  constructor(basePrice: Price, discountRate: number = 0) {
    if (discountRate < 0 || discountRate > 100) {
      throw new Error("Discount rate must be between 0 and 100.");
    }
    this.basePrice = basePrice;
    this.discountRate = discountRate;
  }

  async amount(): Promise<number> {

    const originalAmount = await this.basePrice.amount();
    return originalAmount * (1 - this.discountRate / 100);
  }
}