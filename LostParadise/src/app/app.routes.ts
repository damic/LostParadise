import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccomodationComponent } from './pages/accomodation/accomodation.component';
import { BarComponent } from './pages/bar/bar.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { ResortComponent } from './pages/resort/resort.component';
import { StoryComponent } from './pages/story/story.component';
import { PrivacypComponent } from './pages/privacyp/privacyp.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsComponent } from './pages/terms/terms.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'bar', component: BarComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'resort', component: ResortComponent },
  { path: 'story', component: StoryComponent },
  { path: 'privacyp', component: PrivacypComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'terms', component: TermsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
