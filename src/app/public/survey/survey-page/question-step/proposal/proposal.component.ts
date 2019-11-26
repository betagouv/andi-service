import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'andi-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {

  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
