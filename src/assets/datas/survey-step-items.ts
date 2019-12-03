import { QuestionStep, QuestionType } from '../../models/question-step.model';
import { ResponseProposal } from '../../models/response-proposal.model';
import { IHash } from '../../app/core/services/survey-stepper.shared.service';

/* QUESTIONS FILTRE */

const Q_STEP_1 = new QuestionStep(
  'Avez-vous un emploi aujourd\'hui ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui', '', '', ''),
    new ResponseProposal('Non', '', '', 'Q_STEP_2')
  ],
  ''
);

const Q_STEP_2 = new QuestionStep(
  'Quelle est votre situation ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Salarié du secteur privé', '', '', 'Q_STEP_3'),
    new ResponseProposal('Employé du secteur public', '', '', ''),
    new ResponseProposal('Travailleur en ESAT / EA', '', '', '')
  ],
  ''
);

const Q_STEP_3 = new QuestionStep(
  'Quelle est votre situation ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Salarié d\'une structure de SIAE', '', '', ''),
    new ResponseProposal('Travailleur indépendant', '', '', ''),
    new ResponseProposal('En arrêt maladie', '', '', ''),
    new ResponseProposal('Je ne trouve pas ma situation', '', '', '')
  ],
  ''
);

/* MESSAGE D'AVERTISSEMENT / INFORMATIF */

const D_STEP_1 = new QuestionStep(
  'Vous êtes actuellement salarié dans le privé',
  'Pour faire une immersion dans une autre entreprise, vous devez demander l’autorisation préalable à votre employeur qui verra avec vous les conditions dans lesquelles vous pouvez l’effectuer.',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', '')],
  ''
);

const D_STEP_2 = new QuestionStep(
  'Vous êtes actuellement employé dans le public',
  'Pour faire une immersion dans une autre entreprise, vous devez demander l’autorisation préalable à votre employeur qui verra avec vous les conditions dans lesquelles vous pouvez l’effectuer.Les immersions professionnelles ne sont pas possibles dans le secteur public. D’autres type de découverte métier sont par contre possibles. Rapprochez vous de votre service RH.',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', '')],
  ''
);

const D_STEP_3 = new QuestionStep(
  'Vous êtes actuellement travailleur en ESAT',
  'Les immersions professionnelles pour les travailleurs d’ESAT sont très compliquées a cause de Nicole Brejou. N’hésitez pas à lui écrire un mail bien senti à : nicole.brejou@la-super-copine-de-gaelle.com',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', '')],
  ''
);

const D_STEP_4 = new QuestionStep(
  'Vous êtes actuellement salarié dans le SIAE',
  'Je ne sais pas comment ca se passe. Faire un lien vers Itou ?',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', '')],
  ''
);

const D_STEP_5 = new QuestionStep(
  'Vous êtes actuellement indépendant',
  'Je ne sais pas comment ca se passe. bla bla bla bla lorem ipsum',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', '')],
  ''
);

const D_STEP_6 = new QuestionStep(
  'Vous êtes actuellement en arrêt maladie',
  'Faire une immersion professionnelle en arrêt maladie peut être un processus compliqué. Il faut saisir la CPDP, blabla, d’autres formes d’immersion sont possibles comme l’essai encadré.',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', '')],
  ''
);

const D_STEP_7 = new QuestionStep(
  'Vous ne trouvez pas votre situation',
  'Je ne sais pas mais il faut dire quelque chose, et suggerer de se rapprocher d’une structure quelconque',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', '')],
  ''
);

/* CRITERES DE RECHERCHE */

const C_STEP_1 = new QuestionStep(
  'Quelle est votre adresse postale ?',
  'Nos recherches vont porter sur la proximité d\'une immersion avec cette adresse',
  QuestionType.CRITERIA,
  [
    new ResponseProposal(
      'Adresse postale :',
      'exemple: 10 Rue de Paris, Clichy',
      'address',
      'C_STEP_2'
    )
  ],
  ''
);

const C_STEP_2 = new QuestionStep(
  'Quel(s) métier(s) vous interesserait pour une immersion ?',
  '',
  QuestionType.CRITERIA,
  [
    new ResponseProposal(
      'Métier choisi :',
      'exemple: cariste',
      'jobs',
      'C_STEP_3'
    )
  ],
  ''
);

const C_STEP_3 = new QuestionStep(
  'A quelle distance maximale de votre domicile pouriez-vous vous déplacer pour effectuer une immersion ?',
  '',
  QuestionType.CRITERIA,
  [new ResponseProposal('Distance maximale :', 'exemple: 3', 'range', '')],
  ''
);

export const stepItems: StepsHash = {};

stepItems['Q_STEP_1'] = Q_STEP_1;
stepItems['Q_STEP_2'] = Q_STEP_2;
stepItems['Q_STEP_3'] = Q_STEP_3;
stepItems['D_STEP_1'] = D_STEP_1;
stepItems['D_STEP_2'] = D_STEP_2;
stepItems['D_STEP_3'] = D_STEP_3;
stepItems['D_STEP_4'] = D_STEP_4;
stepItems['D_STEP_5'] = D_STEP_5;
stepItems['D_STEP_6'] = D_STEP_6;
stepItems['D_STEP_7'] = D_STEP_7;
stepItems['C_STEP_1'] = C_STEP_1;
stepItems['C_STEP_2'] = C_STEP_2;
stepItems['C_STEP_3'] = C_STEP_3;

export interface StepsHash {
  [indexer: string]: QuestionStep;
}