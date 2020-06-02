import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SummaryResultPageComponent} from './public/summary/summary-result-page/summary-result-page.component';
import {SurveyPageComponent} from './public/survey/survey-page/survey-page.component';
import {FirmPageComponent} from './public/firm/firm-page/firm-page.component';
import {HomePageComponent} from './public/home/home-page/home-page.component';
import {LegalNoticeComponent} from './public/legal-notice/legal-notice.component';
import {PersonalDatasComponent} from 'src/app/public/personal-datas/personal-datas.component';
import {CGUComponent} from './public/cgu/cgu.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {title: 'ANDi - Accueil'}
  },
  {
    path: 'home',
    component: HomePageComponent,
    data: {title: 'ANDi - Accueil'}
  },
  {
    path: 'survey',
    component: SurveyPageComponent,
    data: {title: 'ANDi - Questionnaire'}
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
  {
    path: 'mentions-legales',
    component: LegalNoticeComponent,
    data: {title: 'Mentions légales'}
  },
  {
    path: 'conditions-generales',
    component: CGUComponent,
    data: {title: 'Conditions générales d’utilisation'}
  },
  {
    path: 'donnees-personnelles',
    component: PersonalDatasComponent,
    data: {title: 'Données personnelles'}
  },
  {path: '**', redirectTo: '/home'}
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
