import { Component, OnInit, Input } from '@angular/core';
import { ResponseProposal } from 'src/models/response-proposal.model';
import { QuestionType } from 'src/models/question-step.model';

@Component({
  selector: 'andi-question-step',
  templateUrl: './question-step.component.html',
  styleUrls: ['./question-step.component.scss']
})
export class QuestionStepComponent implements OnInit {
  @Input() sentence: string;
  @Input() description: string;
  @Input() type: QuestionType;
  @Input() proposals: ResponseProposal[];

  constructor() {}

  ngOnInit() {}
}
