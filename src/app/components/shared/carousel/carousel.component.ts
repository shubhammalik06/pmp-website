import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carousalAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(
          '300ms ease-in',
          style({
            transform: 'translateX(0%)',
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({
            transform: 'translateX(-100%)',
          })
        ),
      ]),
    ]),
  ],
})

export class CarouselComponent implements OnInit {

  @Input() images!: carouselImage[];

  @Input() indicators = true;

  @Input() styles = {};

  selectedIndex = 0;
  constructor() {}

  ngOnInit(): void {
    this.autoSlideImages();
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  autoSlideImages(): void {
    setInterval(() => {
      this.selectedIndex < this.images.length - 1
        ? this.selectedIndex++
        : (this.selectedIndex = 0);
    }, 3000);
  }
}
