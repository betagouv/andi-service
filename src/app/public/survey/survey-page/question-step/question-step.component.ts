import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionStep } from '../../../../../models/question-step.model';

@Component({
  selector: 'andi-question-step',
  templateUrl: './question-step.component.html',
  styleUrls: ['./question-step.component.scss']
})
export class QuestionStepComponent implements OnInit {
  @Input() questionStep: QuestionStep;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
