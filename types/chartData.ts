export default class ChartData {
  name;
  RegularPrice;
  DiscountedPrice;

  constructor(name: string, RegularPrice: number, DiscountedPrice: number) {
    this.name = name;
    this.RegularPrice = RegularPrice;
    this.DiscountedPrice = DiscountedPrice;
  }
}
