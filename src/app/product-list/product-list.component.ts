import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  student_name: any = '太郎';
  products = '太郎';

  share() {
    window.alert('The product has been shared!');
  }

  notify() {
    window.alert('お知らせを受け取ります！');
  }
}
