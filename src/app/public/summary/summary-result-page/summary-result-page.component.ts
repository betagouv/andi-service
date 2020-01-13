import { Component, OnInit } from '@angular/core';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';

@Component({
  selector: 'andi-summary-result-page',
  templateUrl: './summary-result-page.component.html',
  styleUrls: ['./summary-result-page.component.scss']
})
export class SummaryResultPageComponent implements OnInit {
  constructor(private pmsmpService: PmsmpService) {}

  ngOnInit() {}
}
