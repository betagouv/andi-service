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
import { SomeHelpComponent } from '../../core/components/some-help/some-help.component';
import { StepperOverviewComponent } from './survey-page/question-step/stepper-overview/stepper-overview.component';
import { JobSearchComponent } from './survey-page/question-step/stepper-overview/job-search/job-search.component';
import { JobPrivateComponent } from './survey-page/question-step/stepper-overview/job-private/job-private.component';
import { JobEsatComponent } from './survey-page/question-step/stepper-overview/job-esat/job-esat.component';
import { JobIaeComponent } from './survey-page/question-step/stepper-overview/job-iae/job-iae.component';

@NgModule({
  declarations: [
    SurveyPageComponent,
    QuestionStepComponent,
    ProposalComponent,
    NavigationStepComponent,
    CriterionComponent,
    SomeHelpComponent,
    StepperOverviewComponent,
    JobSearchComponent,
    JobPrivateComponent,
    JobEsatComponent,
    JobIaeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgxUiLoaderModule
  ]
})
export class SurveyModule {}
