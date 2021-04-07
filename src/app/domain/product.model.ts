export class ProductModel {

  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public deparamet: string[],
    public price: number) {
  }

}
