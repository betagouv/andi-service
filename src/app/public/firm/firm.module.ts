import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirmPageComponent } from './firm-page/firm-page.component';
import { FirmCommitmentComponent } from './firm-page/firm-commitment/firm-commitment.component';
import { FirmGoalsComponent } from './firm-page/firm-goals/firm-goals.component';



@NgModule({
  declarations: [FirmPageComponent, FirmCommitmentComponent, FirmGoalsComponent],
  imports: [
    CommonModule
  ]
})
export class FirmModule { }
