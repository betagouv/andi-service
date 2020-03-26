import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SummaryResultPageComponent} from './public/summary/summary-result-page/summary-result-page.component';
import {SurveyPageComponent} from './public/survey/survey-page/survey-page.component';
import {FirmPageComponent} from './public/firm/firm-page/firm-page.component';

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
  {
    path: 'employeurs',
    component: FirmPageComponent,
    data: {title: 'ANDi - Employeurs, découvrez ANDi'}
  },
  {path: '**', redirectTo: '/survey'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
