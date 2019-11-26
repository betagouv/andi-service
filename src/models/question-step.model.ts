import { ResponseProposal } from './response-proposal.model';

export class QuestionStep {
  sentence: string;
  description: string;
  type: QuestionType;
  proposals: ResponseProposal[];

  constructor(
    sentence: string,
    description: string,
    type: QuestionType,
    proposals: ResponseProposal[]
  ) {
    this.sentence = sentence;
    this.description = description;
    this.type = type;
    this.proposals = proposals;
  }
}

export enum QuestionType {
  REDIRECT = 'redirect',
  CRITERIA = 'criteria'
}
