import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  products!: any;
  carouselImages : any = [
    { imageSrc : "../../../../assets/images/graphic-card-1.jpg", imageAlt : "" },
    { imageSrc : "../../../../assets/images/graphic-card-2.jpg", imageAlt : "" },
    { imageSrc : "../../../../assets/images/graphic-card-3.jpg", imageAlt : "" },
    { imageSrc : "../../../../assets/images/graphic-card-4.jpg", imageAlt : "" },
    { imageSrc : "../../../../assets/images/graphic-card-5.jpg", imageAlt : "" },
  ];

  styles = {
    containerWidth : "98%",
    marginTop: "10px",
    imageHeight: "650px"
  }

  showShimmer: boolean = true;
  searchString: string = '';

  @Input('searchedItems') searchedItems!: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    //  setTimeout(() => {
    this.products = [
      {
        pid: 1,
        productName: 'Product 1',
        pprice: 472,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Keyboard',
        pbrand: 'Razor',
        images: [
          { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
          { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
          { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
          { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
          { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" }
        ],
        isSaleActive : "Y" // boolean

      },
      {
        pid: 2,
        productName: 'Product 2',
        pprice: 500,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Mouse',
        pbrand: 'Keycrone',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
      {
        pid: 3,
        productName: 'Product 3',
        pprice: 1500,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Memory Card',
        pbrand: 'JBL',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
      {
        pid: 4,
        productName: 'Product 4',
        pprice: 500,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Mouse',
        pbrand: 'BOAT',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
      {
        pid: 5,
        productName: 'Product 5',
        pprice: 472,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Keyboard',
        pbrand: 'Razor',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
      {
        pid: 6,
        productName: 'Product 6',
        pprice: 50000,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Graphic Card',
        pbrand: 'JBL',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
      {
        pid: 7,
        productName: 'Product many',
        pprice: 50000,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Graphic Card',
        pbrand: 'Random 1',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
      {
        pid: 8,
        productName: 'Product many',
        pprice: 50000,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Graphic Card',
        pbrand: 'Random 2',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
      {
        pid: 9,
        productName: 'Product many',
        pprice: 50000,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Graphic Card',
        pbrand: 'Random 1',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
      {
        pid: 10,
        productName: 'Product many',
        pprice: 50000,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Graphic Card',
        pbrand: 'Random 2',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
      {
        pid: 11,
        productName: 'Product many',
        pprice: 50000,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Graphic Card',
        pbrand: 'Razor',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
      {
        pid: 12,
        productName: 'Product many',
        pprice: 50000,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Graphic Card',
        pbrand: 'Random 3',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
      {
        pid: 13,
        productName: 'Product many',
        pprice: 50000,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Graphic Card',
        pbrand: 'Random 2',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
      {
        pid: 14,
        productName: 'Product many',
        pprice: 50000,
        customer_discount: '10%',
        wholesale_discount: '25',
        description:
          'JavaScript lies at the heart of almost every modern web application',
        website: 'http://eloquentjavascript.net/',
        productType: 'Graphic Card',
        pbrand: 'Razor',
        images: [
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
         { imageSrc : "../../../../../assets/images/download.svg", imageAlt : "" },
        ],
      },
    ];
    this.showShimmer = false;
    //   }, 3000);

    this.sharedService.setProductList(this.products);
  }

  searchValue($event: string) {
    this.searchString = $event;


  }
}
