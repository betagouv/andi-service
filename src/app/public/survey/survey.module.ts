import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationStepComponent } from './survey-page/navigation-step/navigation-step.component';
import { ProposalComponent } from './survey-page/question-step/proposal/proposal.component';
import { QuestionStepComponent } from './survey-page/question-step/question-step.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';



@NgModule({
  declarations: [SurveyPageComponent, QuestionStepComponent, ProposalComponent, NavigationStepComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SurveyModule { }
