import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirmPageComponent } from './firm-page/firm-page.component';
import { FirmCommitmentComponent } from './firm-page/firm-commitment/firm-commitment.component';
import { FirmGoalsComponent } from './firm-page/firm-goals/firm-goals.component';
import { FirmPartnersComponent } from './firm-page/firm-partners/firm-partners.component';



@NgModule({
  declarations: [FirmPageComponent, FirmCommitmentComponent, FirmGoalsComponent, FirmPartnersComponent],
  imports: [
    CommonModule
  ]
})
export class FirmModule { }
