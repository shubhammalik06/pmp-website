import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent {
 // searchText: string = '';

  constructor(private route: Router, private sharedService: SharedService) {}

  @Input('productList') products!: any;
  @Input() searchValue!: string;

  onProductClick(product: any) {
    this.sharedService.setSelectedProductData(product);
    this.route.navigateByUrl('/products/' + product.pid);
  }

  addToCart(addedProductDetails:any){
    this.sharedService.addToCart();
    this.sharedService.productDetails(addedProductDetails);
  }


}