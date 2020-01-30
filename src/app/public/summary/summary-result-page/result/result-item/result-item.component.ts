import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/models/pmsmp-result';

@Component({
  selector: 'andi-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent implements OnInit {

  @Input() pmsmpItem: Data;
  @Input() jobName: string;

  contact = false;

  constructor() { }

  ngOnInit() {
  }

  switchContactBtn() {
    this.contact = !this.contact;
  }

}
