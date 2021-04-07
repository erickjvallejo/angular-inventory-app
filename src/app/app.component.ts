import {Component} from '@angular/core';
import {ProductModel} from './domain/product.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="inventory-app">
      (Product will be here soonly)
    </div>`
})
export class AppComponent {
  product: ProductModel;

  constructor() {

    this.product = new ProductModel('NICEHAT',
      'A nice Black hat',
      'assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      30.0
    );
  }


}
