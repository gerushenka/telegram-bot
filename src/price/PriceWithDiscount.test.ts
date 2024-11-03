import { PriceWithDiscount } from './PriceWithDiscount';
import { NumberPrice } from './NumberPrice';

describe('PriceWithDiscount', () => {
  it('должен корректно применять скидку', async () => {
    const basePrice = new NumberPrice(100);
    const discountedPrice = new PriceWithDiscount(basePrice, 20); // 20% скидка
    const amount = await discountedPrice.amount();
    expect(amount).toBe(80);
  });

  it('должен возвращать полную цену при скидке 0%', async () => {
    const basePrice = new NumberPrice(100);
    const discountedPrice = new PriceWithDiscount(basePrice, 0);
    const amount = await discountedPrice.amount();
    expect(amount).toBe(100);
  });

  it('должен возвращать нулевую цену при скидке 100%', async () => {
    const basePrice = new NumberPrice(100);
    const discountedPrice = new PriceWithDiscount(basePrice, 100);
    const amount = await discountedPrice.amount();
    expect(amount).toBe(0);
  });

  it('должен выбрасывать ошибку, если скидка меньше 0%', () => {
    const basePrice = new NumberPrice(100);
    expect(() => new PriceWithDiscount(basePrice, -10)).toThrow(
      "Discount rate must be between 0 and 100."
    );
  });

  it('должен выбрасывать ошибку, если скидка больше 100%', () => {
    const basePrice = new NumberPrice(100);
    expect(() => new PriceWithDiscount(basePrice, 110)).toThrow(
      "Discount rate must be between 0 and 100."
    );
  });
});
