import { QuestionStep, QuestionType } from '../../models/question-step.model';
import { ResponseProposal } from '../../models/response-proposal.model';

/* QUESTIONS FILTRE */


/* DEMANDEUR D'EMPLOI */
const Q1 = new QuestionStep(
  'Quelle est votre situation actuelle ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Je suis à la recherche d’un emploi', '', 'job_search', 'Q2A'),
    new ResponseProposal('Je suis en poste', '', 'job_owner', 'Q2B')
  ],
  ''
);

const Q2A = new QuestionStep(
  'Par qui êtes-vous accompagné ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Pôle Emploi', '', 'pole_emploi', 'Q3A'),
    new ResponseProposal('Cap Emploi', '', 'cap_emploi', 'Q3A'),
    new ResponseProposal('Mission locale', '', 'mission_locale', 'Q3A'),
    new ResponseProposal('Autre structure (CRP, SAVS, SAMSAH, SEA, Assistance sociale)', '', 'other', 'Q3A'),
    new ResponseProposal('Je ne suis pas accompagné', '', 'non_accompagne', 'Q3A')
  ],
  ''
);

const Q3A = new QuestionStep(
  'Êtes-vous actuellement en arret maladie de longue durée ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui', '', 'sick', 'Q4A'),
    new ResponseProposal('Non', '', 'sane', 'Q4A')
  ],
  ''
);

const Q4A = new QuestionStep(
  'Avez-vous la reconnaissance de la qualité de travailleur handicapé (RQTH) ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui', '', 'rqth', 'F_JOB_SEARCH'),
    new ResponseProposal('Non', '', 'not_rqth', 'F_JOB_SEARCH')
  ],
  ''
);

/* EN POSTE */

const Q2B = new QuestionStep(
  'Dans quel secteur êtes-vous en poste ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Secteur privé', '', 'prive', 'Q3B'),
    new ResponseProposal('Travailleur en ESAT / AE', '', 'esat', 'F_JOB_ESAT'),
    new ResponseProposal('Travailleur en en contrat aidé / IAE', '', 'iae', 'Q4D')
  ],
  ''
);

/* EN POSTE PRIVE */

const Q3B = new QuestionStep(
  'Êtes-vous actuellement en arret maladie de longue durée ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui', '', 'sick', 'Q4B'),
    new ResponseProposal('Non', '', 'sane', 'Q4B')
  ],
  ''
);

const Q4B = new QuestionStep(
  'Avez-vous la reconnaissance de la qualité de travailleur handicapé (RQTH) ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui', '', 'rqth', 'F_JOB_PRIVATE'),
    new ResponseProposal('Non', '', 'not_rqth', 'F_JOB_PRIVATE')
  ],
  ''
);


/* EN POSTE ESAT*/


/* EN POSTE CONTRAT AIDE OU IAE*/

const Q4D = new QuestionStep(
  'Avez-vous la reconnaissance de la qualité de travailleur handicapé (RQTH) ?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui', '', 'rqth', 'F_JOB_IAE'),
    new ResponseProposal('Non', '', 'not_rqth', 'F_JOB_IAE')
  ],
  ''
);


/* MESSAGE D'AVERTISSEMENT / INFORMATIF */

const F_JOB_SEARCH = new QuestionStep(
  'Vous êtes actuellement en recherche d\'emploi',
  'Texte spécifique au demandeurs d\'emploi...',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  ''
);

const F_JOB_PRIVATE = new QuestionStep(
  'Vous êtes actuellement salarié dans le secteur privé',
  'Texte spécifique aux salariés dans le secteur privé',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  ''
);

const F_JOB_ESAT = new QuestionStep(
  'Vous êtes actuellement travailleur ESAT / AE',
  'Texte spécifique aux travailleurs ESAT / AE',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  ''
);

const F_JOB_IAE = new QuestionStep(
  'Vous êtes actuellement travailleur en contrat aidé / IAE',
  'Texte spécifique aux travailleurs en contrat aidé / IAE',
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
stepItems['Q2A'] = Q2A;
stepItems['Q3A'] = Q3A;
stepItems['Q4A'] = Q4A;
stepItems['Q2B'] = Q2B;
stepItems['Q3B'] = Q3B;
stepItems['Q4B'] = Q4B;
stepItems['Q4D'] = Q4D;
stepItems['F_JOB_SEARCH'] = F_JOB_SEARCH;
stepItems['F_JOB_PRIVATE'] = F_JOB_PRIVATE;
stepItems['F_JOB_ESAT'] = F_JOB_ESAT;
stepItems['F_JOB_IAE'] = F_JOB_IAE;
stepItems['C1'] = C1;
stepItems['C2'] = C2;
stepItems['C3'] = C3;

export interface StepsHash {
  [indexer: string]: QuestionStep;
}
