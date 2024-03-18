import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {

}
