import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackingService } from 'src/app/core/services/tracking.service';
import { QuestionStep } from '../../../../../models/question-step.model';
import { StepContext } from 'src/models/tracking-request.model';

@Component({
  selector: 'andi-question-step',
  templateUrl: './question-step.component.html',
  styleUrls: ['./question-step.component.scss']
})
export class QuestionStepComponent implements OnInit {
  @Input() questionStep: QuestionStep;

  constructor(
    private router: Router,
    private trackingService: TrackingService
    ) {}

  ngOnInit() {
    this.trackingService.track('pasapas', StepContext.ARRIVAL);
  }

  goToSearch() {
    this.router.navigateByUrl('/summary');
  }
}
