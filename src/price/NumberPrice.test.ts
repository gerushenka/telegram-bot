import { NumberPrice } from './NumberPrice';

describe('NumberPrice', () => {
  it('must return a fixed price', () =>
    expect(new NumberPrice(100).amount()).resolves.toBe(100)
  )

  it('must return a floating point price', () =>
    expect(new NumberPrice(99.99).amount()).resolves.toBeCloseTo(99.99, 2)
  )
})
