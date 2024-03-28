import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent {

  @Input('product') product! : any;
  
  onProductClick(product:any){

  }
}
