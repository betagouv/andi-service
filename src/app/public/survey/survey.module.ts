import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { QuestionStepComponent } from './survey-page/question-step/question-step.component';
import { ProposalComponent } from './survey-page/question-step/proposal/proposal.component';



@NgModule({
  declarations: [SurveyPageComponent, QuestionStepComponent, ProposalComponent],
  imports: [
    CommonModule
  ]
})
export class SurveyModule { }
