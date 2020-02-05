export class PmsmpResult {
  /* tslint:disable:variable-name */
  readonly _v: number = 1;
  _timestamp: string;
  _query_id: string;
  _session_id: string;
  _trace: string;
  data: Data[];

  constructor(options: {
    _timestamp: string;
    _query_id: string;
    _session_id: string;
    _trace: string;
    data: Data[];
  }) {
    this._timestamp = options._timestamp;
    this._query_id = options._query_id;
    this._session_id = options._session_id;
    this._trace = options._trace;
    this.data = options.data;
  }
  /* tslint:enable */
}

export class Data {
  id: string;
  name: string;
  phonenumber;
  address: string;
  departement: string;
  city: string;
  coords: Coords;
  naf: string;
  siret: string;
  distance: number;
  scoring: Scoring;
  score: number;
  activity: string;
  size: string;

  constructor(options: {
    id: string;
    name: string;
    phonenumber;
    address: string;
    departement: string;
    city: string;
    coords: Coords;
    naf: string;
    siret: string;
    distance: number;
    scoring: Scoring;
    score: number;
    activity: string;
    size: string;
  }) {
    this.id = options.id;
    this.name = options.name;
    this.phonenumber = options.phonenumber;
    this.address = options.address;
    this.departement = options.departement;
    this.city = options.city;
    this.coords = options.coords;
    this.naf = options.naf;
    this.siret = options.siret;
    this.distance = options.distance;
    this.scoring = options.scoring;
    this.score = options.score;
    this.activity = options.activity;
    this.size = options.size;
  }
}

export class Coords {
  lat: number;
  lon: number;

  constructor(options: { lat: number; lon: number }) {
    this.lat = options.lat;
    this.lon = options.lon;
  }
}

export class Scoring {
  geo: number;
  size: number;
  contact: number;
  pmsmp: number;
  naf: number;

  constructor(options: {
    geo: number;
    size: number;
    contact: number;
    pmsmp: number;
    naf: number;
  }) {
    this.geo = options.geo;
    this.size = options.size;
    this.contact = options.contact;
    this.pmsmp = options.pmsmp;
    this.naf = options.naf;
  }
}
