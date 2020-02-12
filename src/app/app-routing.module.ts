import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryResultPageComponent } from './public/summary/summary-result-page/summary-result-page.component';
import { SurveyPageComponent } from './public/survey/survey-page/survey-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/survey',
    pathMatch: 'full'
  },
  {
    path: 'survey/:stepId',
    component: SurveyPageComponent,
    data: {title: 'ANDi - Questionnaire'}
  },
  {
    path: 'summary',
    component: SummaryResultPageComponent,
    data: {title: 'ANDi - Recherche Immersion'}
  },
  { path: '**', redirectTo: '/survey' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
