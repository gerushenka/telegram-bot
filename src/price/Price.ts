export default interface Price {
  amount(): Promise<number>
  PriceWithDiscount(): Promise<number>
  NumberPrice(): Promise<number>
}