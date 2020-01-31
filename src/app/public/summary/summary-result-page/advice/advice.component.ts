import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'andi-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent implements OnInit {

  showAdvice = false;
  constructor() {}

  ngOnInit() {}

  toggleAdvice() {
    this.showAdvice = !this.showAdvice;
  }
}
