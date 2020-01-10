import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationStepComponent } from './survey-page/navigation-step/navigation-step.component';
import { ProposalComponent } from './survey-page/question-step/proposal/proposal.component';
import { QuestionStepComponent } from './survey-page/question-step/question-step.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CriterionComponent } from './survey-page/question-step/criterion/criterion.component';



@NgModule({
  declarations: [SurveyPageComponent, QuestionStepComponent, ProposalComponent, NavigationStepComponent, CriterionComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgxUiLoaderModule
  ]
})
export class SurveyModule { }
