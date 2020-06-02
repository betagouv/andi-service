import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PublicRoutingModule} from './public-routing.module';
import {SummaryModule} from './summary/summary.module';
import {SurveyModule} from './survey/survey.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FirmModule} from './firm/firm.module';
import {HomeModule} from './home/home.module';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { CGUComponent } from './cgu/cgu.component';
import { PersonalDatasComponent } from './personal-datas/personal-datas.component';

@NgModule({
  declarations: [LegalNoticeComponent, CGUComponent, PersonalDatasComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SurveyModule,
    SummaryModule,
    HomeModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    FirmModule
  ],
  exports: []
})
export class PublicModule {
}
