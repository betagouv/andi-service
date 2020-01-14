import { QuestionStep, QuestionType } from '../../models/question-step.model';
import { ResponseProposal } from '../../models/response-proposal.model';

/* QUESTIONS FILTRE */

const Q1 = new QuestionStep(
  'Quelle est votre situation professionelle actuelle ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Je suis en poste (salarié / fonction publique)', '', '', 'Q2'),
    new ResponseProposal('Je suis à la recherche d’un emploi', '', '', 'Q2'),
    new ResponseProposal('Je suis en étudiant en formation', '', '', 'Q2')
  ],
  ''
);

const Q2 = new QuestionStep(
  'Quelle est votre situation ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Salarié du secteur privé', '', '', 'D1'),
    new ResponseProposal('Employé du secteur public', '', '', 'D2'),
    new ResponseProposal('Travailleur en ESAT / EA', '', '', 'D3')
  ],
  ''
);

const Q3 = new QuestionStep(
  'Quelle est votre situation ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Salarié d\'une structure de SIAE', '', '', 'D4'),
    new ResponseProposal('Travailleur indépendant', '', '', 'D5'),
    new ResponseProposal('En arrêt maladie', '', '', 'D6'),
    new ResponseProposal('Je ne trouve pas ma situation', '', '', 'D7')
  ],
  ''
);

/* MESSAGE D'AVERTISSEMENT / INFORMATIF */

const D1 = new QuestionStep(
  'Vous êtes actuellement salarié dans le privé',
  'Pour faire une immersion dans une autre entreprise, vous devez demander l’autorisation préalable à votre employeur qui verra avec vous les conditions dans lesquelles vous pouvez l’effectuer.',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'Q3')],
  ''
);

const D2 = new QuestionStep(
  'Vous êtes actuellement employé dans le public',
  'Pour faire une immersion dans une autre entreprise, vous devez demander l’autorisation préalable à votre employeur qui verra avec vous les conditions dans lesquelles vous pouvez l’effectuer.Les immersions professionnelles ne sont pas possibles dans le secteur public. D’autres type de découverte métier sont par contre possibles. Rapprochez vous de votre service RH.',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'Q3')],
  ''
);

const D3 = new QuestionStep(
  'Vous êtes actuellement travailleur en ESAT',
  'Les immersions professionnelles pour les travailleurs d’ESAT sont très compliquées a cause de Nicole Brejou. N’hésitez pas à lui écrire un mail bien senti à : nicole.brejou@la-super-copine-de-gaelle.com',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'Q3')],
  ''
);

const D4 = new QuestionStep(
  'Vous êtes actuellement salarié dans le SIAE',
  'Je ne sais pas comment ca se passe. Faire un lien vers Itou ?',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  ''
);

const D5 = new QuestionStep(
  'Vous êtes actuellement indépendant',
  'Je ne sais pas comment ca se passe. bla bla bla bla lorem ipsum',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  ''
);

const D6 = new QuestionStep(
  'Vous êtes actuellement en arrêt maladie',
  'Faire une immersion professionnelle en arrêt maladie peut être un processus compliqué. Il faut saisir la CPDP, blabla, d’autres formes d’immersion sont possibles comme l’essai encadré.',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  ''
);

const D7 = new QuestionStep(
  'Vous ne trouvez pas votre situation',
  'Je ne sais pas mais il faut dire quelque chose, et suggerer de se rapprocher d’une structure quelconque',
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
stepItems['D2'] = D2;
stepItems['D3'] = D3;
stepItems['D4'] = D4;
stepItems['D5'] = D5;
stepItems['D6'] = D6;
stepItems['D7'] = D7;
stepItems['C1'] = C1;
stepItems['C2'] = C2;
stepItems['C3'] = C3;

export interface StepsHash {
  [indexer: string]: QuestionStep;
}