import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {routes} from '../../app-routing.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class HomeModule {
}
