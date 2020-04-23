import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { routes } from '../../app-routing.module';
import { SomeHelpComponent } from '../../core/components/some-help/some-help.component';
import { NavigationStepComponent } from './survey-page/navigation-step/navigation-step.component';
import { CriterionComponent } from './survey-page/question-step/criterion/criterion.component';
import { ProposalComponent } from './survey-page/question-step/proposal/proposal.component';
import { QuestionStepComponent } from './survey-page/question-step/question-step.component';
import { FormationComponent } from './survey-page/question-step/stepper-overview/formation/formation.component';
import { JobEsatComponent } from './survey-page/question-step/stepper-overview/job-esat/job-esat.component';
import { JobIaeComponent } from './survey-page/question-step/stepper-overview/job-iae/job-iae.component';
import { JobPrivateComponent } from './survey-page/question-step/stepper-overview/job-private/job-private.component';
import { JobPublicComponent } from './survey-page/question-step/stepper-overview/job-public/job-public.component';
import { JobSearchComponent } from './survey-page/question-step/stepper-overview/job-search/job-search.component';
import { StepperOverviewComponent } from './survey-page/question-step/stepper-overview/stepper-overview.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SickInfoComponent } from './survey-page/question-step/stepper-overview/sick-info/sick-info.component';
import { RqthInfoComponent } from './survey-page/question-step/stepper-overview/rqth-info/rqth-info.component';
import { UnfollowedComponent } from './survey-page/question-step/stepper-overview/unfollowed/unfollowed.component';

@NgModule({
  declarations: [
    SurveyPageComponent,
    QuestionStepComponent,
    ProposalComponent,
    NavigationStepComponent,
    CriterionComponent,
    StepperOverviewComponent,
    JobSearchComponent,
    JobPrivateComponent,
    JobEsatComponent,
    JobIaeComponent,
    JobPublicComponent,
    FormationComponent,
    SickInfoComponent,
    RqthInfoComponent,
    UnfollowedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    RouterModule.forRoot(routes)
  ]
})
export class SurveyModule {}
