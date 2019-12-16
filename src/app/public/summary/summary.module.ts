import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryResultPageComponent } from './summary-result-page/summary-result-page.component';
import { SummaryComponent } from './summary-result-page/summary/summary.component';
import { ResultComponent } from './summary-result-page/result/result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxUiLoaderModule } from 'ngx-ui-loader';



@NgModule({
  declarations: [SummaryResultPageComponent, SummaryComponent, ResultComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    NgxUiLoaderModule
  ]
})
export class SummaryModule { }
