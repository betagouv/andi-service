import { ResponseProposal } from './response-proposal.model';

export class QuestionStep {
  constructor(
    public sentence: string,
    public description: string,
    public type: QuestionType,
    public proposals: ResponseProposal[],
    public url: string
  ) {}
}

export enum QuestionType {
  REDIRECT = 'redirect',
  CRITERIA = 'criteria',
  DISCLAIMER = 'disclaimer'
}
