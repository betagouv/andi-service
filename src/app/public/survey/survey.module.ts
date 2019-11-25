import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { QuestionStepComponent } from './survey-page/question-step/question-step.component';



@NgModule({
  declarations: [SurveyPageComponent, QuestionStepComponent],
  imports: [
    CommonModule
  ]
})
export class SurveyModule { }
