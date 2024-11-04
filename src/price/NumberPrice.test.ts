import { NumberPrice } from './NumberPrice';

describe('NumberPrice', () => {
  it('must return a fixed price', async () => {
    await expect(new NumberPrice(100).amount()).resolves.toBe(100);
  });

  it('should return a floating point price', async () => {
    await expect(new NumberPrice(99.99).amount()).resolves.toBeCloseTo(99.99, 2);
  });
});
