import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

import { ButtonModule } from 'primeng/button'; 

interface Car { 
  id?: string; 
  name?: string; 
  description?: string; 
  price?: number; 
} 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent {

  cars: Car[] = []; 
  
  constructor() { } 

  ngOnInit() { 
      this.cars = [ 
          { 
              id: '1', 
              name: 'Bugatti', 
              description: 'Racing car', 
              price: 800, 
          }, 
          { 
              id: '2', 
              name: 'Ferrari', 
              description: 'The Prancing Horse', 
              price: 1500, 
          }, 
          { 
              id: '3', 
              name: 'Porsche', 
              description: 'Full spectrum', 
              price: 10000, 
          }, 
          { 
            id: '4', 
            name: 'Porsche', 
            description: 'Full spectrum', 
            price: 10000, 
        }, 
        { 
          id: '5', 
          name: 'Porsche', 
          description: 'Full spectrum', 
          price: 10000, 
      }, 
      ]; 
  } 
}
