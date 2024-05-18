import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { RouterModule, RouterOutlet } from '@angular/router';

interface SmallImageCar {
  id?: string;
  picturelink?: string;
  description?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, ButtonModule,RouterOutlet, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  smallgalitem: SmallImageCar[] = [];

  constructor() {}

  ngOnInit() {
    this.smallgalitem = [
      {
        id: '-1-',
        picturelink:
          'LostParadise/assets/Images/34b30fd529934faf3e0c02e66d8e3033.jfif',
        description:
          'Lost Paradise is a place for art, the people who make it and the people who love it. Our apartments are really',
      },
      {
        id: '-2-',
        picturelink:
          'LostParadise/assets/Images/34b30fd529934faf3e0c02e66d8e3033.jfif',
        description:
          'Lost Paradise is a place for art, the people who make it and the people who love it. Our apartments are really',
      },
      {
        id: '-3-',
        picturelink:
          'LostParadise/assets/Images/34b30fd529934faf3e0c02e66d8e3033.jfif',
        description:
          'Lost Paradise is a place for art, the people who make it and the people who love it. Our apartments are really',
      },
      {
        id: '-4-',
        picturelink:
          'LostParadise/assets/Images/34b30fd529934faf3e0c02e66d8e3033.jfif',
        description:
          'Lost Paradise is a place for art, the people who make it and the people who love it. Our apartments are really',
      },
      {
        id: '-5-',
        picturelink:
          'LostParadise/assets/Images/34b30fd529934faf3e0c02e66d8e3033.jfif',
        description:
          'Lost Paradise is a place for art, the people who make it and the people who love it. Our apartments are really',
      },
    ];
  }
}
