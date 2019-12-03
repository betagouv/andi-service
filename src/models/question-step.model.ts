import { ResponseProposal } from './response-proposal.model';

export class QuestionStep {
  sentence: string;
  description: string;
  type: QuestionType;
  proposals: ResponseProposal[];
  url: string;

  constructor(
    sentence: string,
    description: string,
    type: QuestionType,
    proposals: ResponseProposal[],
    url: string
  ) {
    this.sentence = sentence;
    this.description = description;
    this.type = type;
    this.proposals = proposals;
    this.url = url;
  }
}

export enum QuestionType {
  REDIRECT = 'redirect',
  CRITERIA = 'criteria',
  DISCLAIMER = 'disclaimer'
}
