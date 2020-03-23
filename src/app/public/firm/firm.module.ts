import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirmPageComponent } from './firm-page/firm-page.component';
import { FirmCommitmentComponent } from './firm-page/firm-commitment/firm-commitment.component';



@NgModule({
  declarations: [FirmPageComponent, FirmCommitmentComponent],
  imports: [
    CommonModule
  ]
})
export class FirmModule { }
