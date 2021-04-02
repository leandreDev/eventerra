import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.less']
})
export class RelatedProductComponent implements OnInit {

  @Input() products: any = [
    {
      img: 'assets/img/product-small-2.png',
      name: 'Apple Keyboard',
      category: 'wireless bluetooth',
      price: '$69'
    },
    {
      img: 'assets/img/product-small-12.png',
      name: 'Magic Mouse',
      category: 'wireless bluetooth',
      price: '$99'
    },
    {
      img: 'assets/img/product-small-10.png',
      name: 'DALI Xensor 2',
      category: 'Desktop Speaker',
      price: '3000€'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
