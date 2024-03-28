import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit{

  relatedProductsArray! : any;

  @Input('relatedProducts') relatedProducts! : any;
  
  ngOnInit(): void {
    this.relatedProductsArray = this.relatedProducts;
  }

}