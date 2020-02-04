import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryResultPageComponent } from './public/summary/summary-result-page/summary-result-page.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/survey',
    pathMatch: 'full'
  },
  {
    path: 'summary',
    component: SummaryResultPageComponent,
    data: {title: 'ANDi - Recherche Immersion'}
  }
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
