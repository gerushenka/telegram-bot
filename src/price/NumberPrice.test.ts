import { NumberPrice } from './NumberPrice';

describe('NumberPrice', () => {
  it('должен возвращать фиксированную цену', async () => {
    const price = new NumberPrice(100);
    const amount = await price.amount();
    expect(amount).toBe(100);
  });

  it('должен возвращать цену с плавающей точкой', async () => {
    const price = new NumberPrice(99.99);
    const amount = await price.amount();
    expect(amount).toBeCloseTo(99.99, 2);
  });
});