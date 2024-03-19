export class ShoppingEntry {
  public amount: string;
  public item: string;
  public price?: string;


  constructor(amount: string, item: string, price?: string) {
    this.amount = amount;
    this.item = item;
    this.price = price;
  }
}
