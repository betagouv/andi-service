import { Component, OnInit, Input } from '@angular/core';
import { ResponseProposal } from '../../../../../../models/response-proposal.model';
import { QuestionType } from '../../../../../../models/question-step.model';

@Component({
  selector: 'andi-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {
  @Input() proposal: ResponseProposal;
  @Input() questionStepType: QuestionType;

  constructor() {}

  ngOnInit() {}

  updateCriteriasState(addressInput) {
    console.log(addressInput.jobs)

  }
}
