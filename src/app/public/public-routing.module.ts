import { SurveyPageComponent } from './survey/survey-page/survey-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryResultPageComponent } from './summary/summary-result-page/summary-result-page.component';
import {HomePageComponent} from './home/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'survey',
    component: SurveyPageComponent,
  },
  {
    path: 'summary',
    component: SummaryResultPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
