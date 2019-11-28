import { Component, OnInit } from '@angular/core';
import { PmsmpService } from 'src/app/core/services/pmsmp.service';
import { Address, ADDRESS_TYPE } from 'src/models/pmsmp-request';

@Component({
  selector: 'andi-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private pmsmpService: PmsmpService) { }

  ngOnInit() {
  }

  loadPmsmpList(userRequest) {
    this.pmsmpService
      .getPmsmpList(new Address(ADDRESS_TYPE.string, userRequest.adress), [])
      .subscribe(pmsmpListFound => {
        this.pmsmpService.pmsmpResult.next(pmsmpListFound);
      });
  }

}
