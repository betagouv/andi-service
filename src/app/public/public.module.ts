import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { SummaryModule } from './summary/summary.module';
import { SurveyModule } from './survey/survey.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SurveyModule,
    SummaryModule
  ]
})
export class PublicModule { }
