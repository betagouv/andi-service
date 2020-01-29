export class PmsmpRequest {
  /* tslint:disable:variable-name */
  readonly _v: number = 1;
  _timestamp: string;
  _query_id: string;
  _session_id: string;
  address: Address;
  criteria: Criterion[];

  constructor(
    _timestamp: string,
    _query_id: string,
    _session_id: string,
    address: Address,
    criteria: Criterion[]
  ) {
    this._timestamp = _timestamp;
    this._query_id = _query_id;
    this._session_id = _session_id;
    this.address = address;
    this.criteria = criteria;
  }
  /* tslint:enable */
}

export class Address {
  type: ADDRESS_TYPE.string | ADDRESS_TYPE.geoapigouv;
  value: string;

  constructor(
    type: ADDRESS_TYPE.string | ADDRESS_TYPE.geoapigouv,
    value: string
  ) {
    this.type = type;
    this.value = value;
  }
}

export class Criterion {
  priority: number;

  constructor(priority: number) {
    this.priority = priority;
  }
}

export class CriterionDistance extends Criterion {
  name = 'distance';
  distanceKM: string;

  constructor(priority: number, distanceKM: string) {
    super(priority);
    this.distanceKM = distanceKM;
  }
}

export class CriterionCodeRomes extends Criterion {
  name = 'rome_codes';
  romeList: RomeCode[];
  excludeNaf: any[];

  constructor(priority: number, romeList: RomeCode[], excludeNaf: any[]) {
    super(priority);
    this.romeList = romeList;
    this.excludeNaf = excludeNaf;
  }
}

export class RomeCode {
  id: string;
  include: boolean;
  exclude: boolean;

  constructor(id: string, include: boolean, exclude: boolean) {
    this.id = id;
    this.include = include;
    this.exclude = exclude;
  }
}

export enum ADDRESS_TYPE {
  string = 'string',
  geoapigouv = 'geoapigouv'
}
