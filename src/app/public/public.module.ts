import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SurveyModule } from './survey/survey.module';
import { SummaryModule } from './summary/summary.module';
import { FormsModule } from '@angular/forms';


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
