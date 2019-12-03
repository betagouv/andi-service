import { QuestionStep, QuestionType } from '../../models/question-step.model';
import { ResponseProposal } from '../../models/response-proposal.model';

const D_STEP_1 = new QuestionStep(
  'Message d\'information numéro 1',
  'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles.',
  QuestionType.REDIRECT,
  [new ResponseProposal('Ah Oui ?', '', '')],
  'http://www.google.fr/'
);

const D_STEP_2 = new QuestionStep(
  'Message d\'information numéro 2',
  'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles.',
  QuestionType.REDIRECT,
  [new ResponseProposal('Ah Oui ?', '', '')],
  'http://www.google.fr/'
);

const D_STEP_3 = new QuestionStep(
  'Message d\'information numéro 3',
  'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles.',
  QuestionType.REDIRECT,
  [new ResponseProposal('Ah Oui ?', '', '')],
  'http://www.google.fr/'
);

const D_STEP_4 = new QuestionStep(
  'Message d\'information numéro 4',
  'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles.',
  QuestionType.REDIRECT,
  [new ResponseProposal('Ah Oui ?', '', '')],
  'http://www.google.fr/'
);

export const stepItems: QuestionStep[] = [
  D_STEP_1,
  D_STEP_2,
  D_STEP_3,
  D_STEP_4
];
