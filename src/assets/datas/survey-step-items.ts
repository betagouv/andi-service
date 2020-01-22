import { QuestionStep, QuestionType } from '../../models/question-step.model';
import { ResponseProposal } from '../../models/response-proposal.model';

/* QUESTIONS FILTRE */

const Q1 = new QuestionStep(
  'Quelle est votre situation actuelle ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Je suis à la recherche d’un emploi', '', '', 'Q2'),
    new ResponseProposal('Je suis en poste', '', '', 'Q2')
  ],
  ''
);

const Q2 = new QuestionStep(
  'Êtes-vous actuellement en arret maladie de longue durée ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui', '', '', 'Q3'),
    new ResponseProposal('Non', '', '', 'Q3')
  ],
  ''
);

const Q3 = new QuestionStep(
  'Avez-vous la reconnaissance de la qualité de travailleur handicapé (RQTH) ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui', '', '', 'D1'),
    new ResponseProposal('Non', '', '', 'D1')
  ],
  ''
);

/* MESSAGE D'AVERTISSEMENT / INFORMATIF */

const D1 = new QuestionStep(
  'Vous êtes actuellement salarié dans le privé',
  'Pour faire une immersion dans une autre entreprise, vous devez demander l’autorisation préalable à votre employeur qui verra avec vous les conditions dans lesquelles vous pouvez l’effectuer.',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  ''
);


/* CRITERES DE RECHERCHE */

const C1 = new QuestionStep(
  'Quelle est votre adresse postale ?',
  'Nos recherches vont porter sur la proximité d\'une immersion avec cette adresse',
  QuestionType.CRITERIA,
  [
    new ResponseProposal(
      'Adresse postale :',
      'exemple: 10 Rue de Paris, Clichy',
      'address',
      'C2'
    )
  ],
  ''
);

const C2 = new QuestionStep(
  'Quel(s) métier(s) vous interesserait pour une immersion ?',
  '',
  QuestionType.CRITERIA,
  [
    new ResponseProposal(
      'Métier choisi :',
      'exemple: cariste',
      'jobs',
      'C3'
    )
  ],
  ''
);

const C3 = new QuestionStep(
  'A quelle distance maximale de votre domicile pouriez-vous vous déplacer pour effectuer une immersion ?',
  '',
  QuestionType.CRITERIA,
  [new ResponseProposal('Distance maximale :', 'exemple: 3', 'range', '')],
  ''
);

export const stepItems: StepsHash = {};

stepItems['Q1'] = Q1;
stepItems['Q2'] = Q2;
stepItems['Q3'] = Q3;
stepItems['D1'] = D1;
stepItems['C1'] = C1;
stepItems['C2'] = C2;
stepItems['C3'] = C3;

export interface StepsHash {
  [indexer: string]: QuestionStep;
}