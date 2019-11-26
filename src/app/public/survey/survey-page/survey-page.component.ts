import { Component, OnInit, Input } from '@angular/core';
import { QuestionStep, QuestionType } from 'src/models/question-step.model';
import { stepItems } from '../../../../assets/datas/survey-step-items';

@Component({
  selector: 'andi-survey-page',
  templateUrl: './survey-page.component.html',
  styleUrls: ['./survey-page.component.scss']
})
export class SurveyPageComponent implements OnInit {
  questionSteps: QuestionStep[] = stepItems;

  currentQuestionStep: QuestionStep;

  constructor() {}

  ngOnInit() {
    this.currentQuestionStep = this.questionSteps[4];
  }
}
