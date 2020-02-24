import { QuestionStep, QuestionType } from '../../models/question-step.model';
import { ResponseProposal } from '../../models/response-proposal.model';

/* QUESTIONS FILTRE */

/* DEMANDEUR D'EMPLOI */
const Q1 = new QuestionStep(
  'Quelle est votre situation professionnelle aujourd’hui\u00A0?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('J’ai un travail', '', 'job_owner', 'Q2B'),
    new ResponseProposal(
      'Je suis à la recherche d’un emploi',
      '',
      'job_search',
      'Q2A'
    ),
    new ResponseProposal('Je suis en formation', '', 'formation', 'F_FORMATION')
  ],
  '',
  'situation_professionnelle'
);

const Q2A = new QuestionStep(
  'Êtes-vous accompagné par l’une de ces structures\u00A0?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Pôle Emploi', '', 'pole_emploi', 'Q3A'),
    new ResponseProposal('Cap Emploi', '', 'cap_emploi', 'Q3A'),
    new ResponseProposal('Mission locale', '', 'mission_locale', 'Q3A'),
    new ResponseProposal(
      'Autres structures (CRP, SAVS, SAMSAH, SEA, Assistance sociale)',
      '',
      'other',
      'Q3A'
    ),
    new ResponseProposal('Je ne suis pas accompagné', '', 'not_helped', 'Q3A')
  ],
  '',
  'accompagnement_structure'
);

const Q3A = new QuestionStep(
  'Êtes-vous en arrêt maladie depuis plus de 3 mois\u00A0?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui, je suis en arrêt maladie', '', 'sick', 'Q4A'),
    new ResponseProposal(
      'Non, je ne suis pas en arrêt maladie',
      '',
      'sane',
      'Q4A'
    )
  ],
  '',
  'arret_maladie'
);

const Q4A = new QuestionStep(
  'Avez-vous une reconnaissance de la qualité de travailleur handicapé (RQTH)\u00A0?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui, j’ai une RQTH', '', 'rqth', 'F_JOB_SEARCH'),
    new ResponseProposal(
      'Non, je n’ai pas de RQTH',
      '',
      'not_rqth',
      'F_JOB_SEARCH'
    )
  ],
  '',
  'reconnaissance_rqth'
);

/* EN POSTE */

const Q2B = new QuestionStep(
  'Où travaillez-vous\u00A0?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Secteur privé', '', 'prive', 'Q3B'),
    new ResponseProposal('Fonction publique', '', 'publique', 'Q3E'),
    new ResponseProposal(
      'Travailleur en ESAT/EA ou suivi en emploi accompagné',
      '',
      'esat',
      'F_JOB_ESAT'
    ),
    new ResponseProposal('Travailleur en contrat aidé / IAE', '', 'iae', 'Q4D')
  ],
  '',
  'ou_travaillez_vous'
);

/* EN POSTE PRIVE */

const Q3B = new QuestionStep(
  'Êtes-vous en arrêt maladie depuis plus de 3 mois\u00A0?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui, je suis en arrêt maladie', '', 'sick', 'Q4B'),
    new ResponseProposal(
      'Non, je ne suis pas en arrêt maladie',
      '',
      'sane',
      'Q4B'
    )
  ],
  '',
  'arret_maladie'
);

const Q4B = new QuestionStep(
  'Avez-vous une reconnaissance de la qualité de travailleur handicapé (RQTH)\u00A0?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui, j’ai une RQTH', '', 'rqth', 'F_JOB_PRIVATE'),
    new ResponseProposal(
      'Non, je n’ai pas de RQTH',
      '',
      'not_rqth',
      'F_JOB_PRIVATE'
    )
  ],
  '',
  'reconnaissance_rqth'
);

/* EN POSTE PUBLIQUE */

const Q3E = new QuestionStep(
  'Êtes-vous en arrêt maladie depuis plus de 3 mois\u00A0?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui, je suis en arrêt maladie', '', 'sick', 'Q4E'),
    new ResponseProposal(
      'Non, je ne suis pas en arrêt maladie',
      '',
      'sane',
      'Q4E'
    )
  ],
  '',
  'arret_maladie'
);

const Q4E = new QuestionStep(
  'Avez-vous une reconnaissance de la qualité de travailleur handicapé (RQTH)\u00A0?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui, j’ai une RQTH', '', 'rqth', 'F_JOB_PUBLIC'),
    new ResponseProposal(
      'Non, je n’ai pas de RQTH',
      '',
      'not_rqth',
      'F_JOB_PUBLIC'
    )
  ],
  '',
  'reconnaissance_rqth'
);

/* EN POSTE ESAT*/

/* EN POSTE CONTRAT AIDE OU IAE*/

const Q4D = new QuestionStep(
  'Avez-vous une reconnaissance de la qualité de travailleur handicapé (RQTH)\u00A0?',
  '',
  QuestionType.REDIRECT,
  [
    new ResponseProposal('Oui, j’ai une RQTH', '', 'rqth', 'F_JOB_IAE'),
    new ResponseProposal(
      'Non, je n’ai pas de RQTH',
      '',
      'not_rqth',
      'F_JOB_IAE'
    )
  ],
  '',
  'reconnaissance_rqth'
);

/* MESSAGE D'AVERTISSEMENT / INFORMATIF */

const F_JOB_SEARCH = new QuestionStep(
  'Vous êtes actuellement en recherche d\'emploi',
  'Texte spécifique au demandeurs d\'emploi...',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  '',
  'en_recherche_demploi'
);

const F_JOB_PRIVATE = new QuestionStep(
  'Vous êtes actuellement salarié dans le secteur privé',
  'Texte spécifique aux salariés dans le secteur privé',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  '',
  'salarie_prive'
);

const F_JOB_PUBLIC = new QuestionStep(
  'Vous êtes actuellement salarié dans le secteur publique',
  'Texte spécifique aux salariés dans le secteur publique',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  '',
  'salarie_public'
);

const F_JOB_ESAT = new QuestionStep(
  'Vous êtes actuellement travailleur ESAT / AE',
  'Texte spécifique aux travailleurs ESAT / AE',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  '',
  'travailleur_esat'
);

const F_JOB_IAE = new QuestionStep(
  'Vous êtes actuellement travailleur en contrat aidé / IAE',
  'Texte spécifique aux travailleurs en contrat aidé / IAE',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  '',
  'travailleur_contrat_aide'
);

const F_FORMATION = new QuestionStep(
  'Vous êtes actuellement en formation',
  'Texte spécifique en formation',
  QuestionType.DISCLAIMER,
  [new ResponseProposal('', '', '', 'C1')],
  '',
  'en_formation'
);

/* CRITERES DE RECHERCHE */

const C1 = new QuestionStep(
  'Je cherche une immersion en tant que\u00A0:',
  '',
  QuestionType.CRITERIA,
  [new ResponseProposal('', 'Exemples: vente, poissonnier, magasinier', 'jobs', 'C2')],
  '',
  'critere_metier'
);

const C2 = new QuestionStep(
  'Proche de chez moi\u00A0:',
  'Nos recherches vont porter sur la proximité d\'une immersion avec cette adresse',
  QuestionType.CRITERIA,
  [
    new ResponseProposal(
      '',
      'Exemple : 17 Avenue Pierre Mendès-France, 75013 Paris',
      'address',
      'C3'
    )
  ],
  '',
  'critere_addresse'
);

const C3 = new QuestionStep(
  'À une distance maximale de mon domicile de\u00A0:',
  'Distance en kilomètre(s)',
  QuestionType.CRITERIA,
  [new ResponseProposal('', 'Exemple : 3', 'range', '')],
  '',
  'critere_distance'
);

export const stepItems: StepsHash = {};

/* tslint:disable:no-string-literal*/
stepItems['Q1'] = Q1;
stepItems['Q2A'] = Q2A;
stepItems['Q3A'] = Q3A;
stepItems['Q4A'] = Q4A;
stepItems['Q2B'] = Q2B;
stepItems['Q3B'] = Q3B;
stepItems['Q3E'] = Q3E;
stepItems['Q4E'] = Q4E;
stepItems['Q4B'] = Q4B;
stepItems['Q4D'] = Q4D;
stepItems['F_JOB_SEARCH'] = F_JOB_SEARCH;
stepItems['F_JOB_PRIVATE'] = F_JOB_PRIVATE;
stepItems['F_JOB_PUBLIC'] = F_JOB_PUBLIC;
stepItems['F_JOB_ESAT'] = F_JOB_ESAT;
stepItems['F_JOB_IAE'] = F_JOB_IAE;
stepItems['F_FORMATION'] = F_FORMATION;
stepItems['C1'] = C1;
stepItems['C2'] = C2;
stepItems['C3'] = C3;

export interface StepsHash {
  [indexer: string]: QuestionStep;
}
