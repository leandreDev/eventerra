import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  prodIndex = 0;
  product: any;
  constructor(protected route: ActivatedRoute, protected http: HttpClient) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap(params => {
        this.prodIndex = params.id ? params.id : 0;
        return this.http.get('assets/data/pikip.json');
      })
    )
    .subscribe(data => {
      if (data) {
        this.product = data[this.prodIndex];
      } else {
        throw Error('no product found');
      }
    });
  }

}
