import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryResultPageComponent } from './summary-result-page/summary-result-page.component';
import { SummaryComponent } from './summary-result-page/summary/summary.component';
import { ResultComponent } from './summary-result-page/result/result.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SummaryResultPageComponent, SummaryComponent, ResultComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SummaryModule { }
