import Price from './Price';

export default class PriceImplementation implements Price {
  private price: number;
  private discount: number ;

  constructor(price: number, discount: number = 0) {
    this.price = price;
    this.discount = discount;
  }

  async amount(): Promise<number> {
    return this.price;
  }

  async PriceWithDiscount(): Promise<number> {
    return this.discount ? this.price * (1 - this.discount / 100) : this.price;
  }

  async NumberPrice(): Promise<number> {
    return this.amount();
  }
}

