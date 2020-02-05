import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonenumberPipe } from './phonenumber.pipe';



@NgModule({
  declarations: [PhonenumberPipe],
  imports: [
    CommonModule
  ],
  exports: [PhonenumberPipe]
})
export class SharedModule { }
