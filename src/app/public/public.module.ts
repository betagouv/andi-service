import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public-routing.module';
import { SummaryModule } from './summary/summary.module';
import { SurveyModule } from './survey/survey.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SomeHelpComponent } from '../core/components/some-help/some-help.component';
import { FirmModule } from './firm/firm.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SurveyModule,
    SummaryModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    FirmModule
  ],
  exports: []
})
export class PublicModule {}
