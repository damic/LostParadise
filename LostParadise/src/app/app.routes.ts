import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { BarComponent } from './bar/bar.component';
import { ExploreComponent } from './explore/explore.component';
import { ResortComponent } from './resort/resort.component';
import { StoryComponent } from './story/story.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'bar', component: BarComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'resort', component: ResortComponent },
  { path: 'story', component: StoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }