import Price from "./Price";

export class PriceWithDiscount implements Price {
  private readonly basePrice: Price;
  private readonly discountRate: number;

  constructor(basePrice: Price, discountRate: number = 0) {
    this.basePrice = basePrice;
    this.discountRate = discountRate;
  }

  async amount(): Promise<number> {
    const originalAmount = await this.basePrice.amount();
    return originalAmount * (1 - this.discountRate / 100);
  }
}