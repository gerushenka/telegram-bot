import {PriceWithDiscount} from './PriceWithDiscount';
import {NumberPrice} from './NumberPrice';

describe('PriceWithDiscount', () => {
  it('must apply the discount correctly', () =>
    expect(new PriceWithDiscount(new NumberPrice(100), 20).amount()).resolves.toBe(80)
  )

  it('must refund the full price at 0% discount', () =>
    expect(new PriceWithDiscount(new NumberPrice(100), 0).amount()).resolves.toBe(100)
  )

  it('must return a zero price at a 100% discount', () =>
    expect(new PriceWithDiscount(new NumberPrice(100), 100).amount()).resolves.toBe(0)
  )

  it('must throw an error if the discount is less than 0%', () =>
    expect(new PriceWithDiscount(new NumberPrice(100), -10).amount()).rejects.toThrow(
      "Discount rate must be between 0 and 100."
    )
  )

  it('must throw an error if the discount is greater than 100%', () =>
    expect(new PriceWithDiscount(new NumberPrice(100), 110).amount()).rejects.toThrow(
      "Discount rate must be between 0 and 100."
    )
  )
})
