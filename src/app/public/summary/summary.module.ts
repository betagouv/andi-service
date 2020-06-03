import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SummaryResultPageComponent} from './summary-result-page/summary-result-page.component';
import {SummaryComponent} from './summary-result-page/summary/summary.component';
import {ResultComponent} from './summary-result-page/result/result.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {ResultItemComponent} from './summary-result-page/result/result-item/result-item.component';
import {AdviceComponent} from './summary-result-page/advice/advice.component';
import {RouterModule} from '@angular/router';
import {routes} from '../../app-routing.module';
import {PhonenumberPipe} from '../../shared/phonenumber.pipe';


@NgModule({
  declarations: [SummaryResultPageComponent, SummaryComponent, ResultComponent, ResultItemComponent, AdviceComponent, PhonenumberPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    NgxUiLoaderModule,
    RouterModule.forRoot(routes)
  ]
})
export class SummaryModule {
}
