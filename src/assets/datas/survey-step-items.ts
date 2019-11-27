import { QuestionStep, QuestionType } from '../../models/question-step.model';
import { ResponseProposal } from '../../models/response-proposal.model';

const Q_STEP_1 = new QuestionStep(
  'Ceci est la premiere question ?',
  'Voici une courte description',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Ah Oui ?', '', ''),
    new ResponseProposal('Mais nan !', '', ''),
    new ResponseProposal('Hmm Peut-être', '', '')
  ],
  'http://www.google.fr/'
);

const Q_STEP_2 = new QuestionStep(
  'Ceci est la deuxieme question ?',
  'Voici une loooongue description',
  QuestionType.REDIRECT,
  [new ResponseProposal('Black', '', ''), new ResponseProposal('White', '', '')],
  'http://andi.beta.gouv.fr/'
);

const Q_STEP_3 = new QuestionStep(
  'Êtes vous gentil avec les chaton ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Avec les chiens', '', ''),
    new ResponseProposal('Pas toujours', '', ''),
    new ResponseProposal('Les chats <3', '', ''),
    new ResponseProposal('J\'ai faim...', '', '')
  ],
  'https://handicap.gouv.fr/'
);

const Q_STEP_4 = new QuestionStep(
  'Quelle est votre adresse postale ?',
  'Nos recherches vont porter sur la proximité d\'une immersion avec cette adresse',
  QuestionType.CRITERIA,
  [new ResponseProposal('Adresse postale :', 'exemple: 10 Rue de Paris, Clichy', 'address')],
  ''
);

const Q_STEP_5 = new QuestionStep(
  'Quel(s) métier(s) vous interesserait pour une immersion ?',
  '',
  QuestionType.CRITERIA,
  [new ResponseProposal('Métier choisi :', 'exemple: cariste', 'jobs')],
  ''
);

const Q_STEP_6 = new QuestionStep(
  'A quelle distance maximale de votre domicile pouriez-vous vous déplacer pour effectuer une immersion ?',
  '',
  QuestionType.CRITERIA,
  [new ResponseProposal('Distance maximale :', 'exemple: 3', 'range')],
  ''
);

export const stepItems: QuestionStep[] = [Q_STEP_1, Q_STEP_2, Q_STEP_3, Q_STEP_4, Q_STEP_5, Q_STEP_6];
