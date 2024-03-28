import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  constructor(private sharedService: SharedService) {}

  productDetails!: any;
  productDeatils$!: Subscription;
  relatedProducts! : any;

  ngOnInit(): void {
    this.productDeatils$ = this.sharedService.getSelectedProduct().subscribe({
      next: (data: any) => {
        this.findRelatedProducts(this.sharedService.getProductList(), data);
        this.productDetails = data;
      },
      error: (err: string) => {
        alert(err);
      },
    });
  }

  addToCart(){
    this.sharedService.addToCart();
  }

  ngOnDestroy(): void {
    this.productDeatils$.unsubscribe();
  }

  async findRelatedProducts(fullListOfProducts:any, selectedProduct:any){
    this.relatedProducts = fullListOfProducts.value.filter((item:any) => selectedProduct.pbrand === item.pbrand);
    console.log(this.relatedProducts);
  }

}
